#include "MessageSender.h"

using namespace std;

MessageSender::MessageSender(): stop(false){}

void MessageSender::submit(Message message){
    unique_lock<std::mutex>lock(mutex);
    tasks.push(message);
    lock.unlock();
    condition.notify_one();
}

void MessageSender::operator()(){
    while(true){
        unique_lock<std::mutex>lock(mutex);
        condition.wait(lock, [this]{return !tasks.empty() || stop;});

        if (stop && tasks.empty()){
            return;
        }

        Message message = tasks.front();
        tasks.pop();

        lock.unlock();

        std::cout << "Sending message: " << message.content << " from Thread: " << std::this_thread::get_id() << std::endl;

    }
}

void MessageSender :: stopWorker(){
    {
        unique_lock<std::mutex>lock(mutex);
        stop = true;
        lock.unlock();
    }

    condition.notify_all();
}