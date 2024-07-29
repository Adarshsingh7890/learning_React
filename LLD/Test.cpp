#include <iostream>
#include <mutex>
#include <queue>
#include <condition_variable>

using namespace std;

class Message{
    public:
        string content;
        Message (const string& content): content(content){}
};  

class MessageSender {
    private:
        bool stop;
        mutex mut;
        queue<Message>q;
        condition_variable cv;

    public:
        MessageSender(): stop(false){
            
        }

        void operator ()(){
            while(true){
                unique_lock<mutex>lock(mut);
                cv.wait(lock, [this]{
                    return !q.empty() || stop;
                });

                if (stop && q.empty())return ;

                Message message  = q.front();
                q.pop();

                lock.unlock();

                std::cout << "Sending message: " << message.content << " from Thread: " << std::this_thread::get_id() << std::endl;


            }
        }

        void submit (Message task){
            unique_lock<mutex>lock(mut);
            q.push(task);
            lock.unlock();

            cv.notify_one();
        }

        void stop(){
            unique_lock<mutex>lock(mut);
            stop = true;
            lock.unlock();

            cv.notify_all();
        }


};

class ThreadPool{
    
}

int main(){

}