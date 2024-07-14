#include<iostream>
#include<mutex>
#include<condition_variable>
#include<functional>
#include<thread>

using namespace std;

class ThreadPool{
    private:
        int poolSize;
        bool stop;
        mutex mutex;
        condition_variable cv;
        vector<thread>threads;
        vector<function<void()>>tasks;
    
    public:
        ThreadPool(int numThreads) : poolSize(numThreads), stop(false){
            for (int i = 0; i < poolSize; i++){
                threads.emplace_back([this]{
                    function<void()>task;
                    while(1){
                        unique_lock<std::mutex>lock(mutex);
                        cv.wait(lock, [this]{
                            return !tasks.empty() || stop;
                        });

                        if (stop || tasks.empty())return;

                        task = move(tasks.front());
                        tasks.pop_back();
                        lock.unlock();
                        task();
                    }
                });
                
            }   
        }

        ~ThreadPool(){
            unique_lock<std::mutex>lock(mutex);
            stop = true;
            lock.unlock();

            cv.notify_all();

            for (auto &th: threads){
                th.join();
            }
        }

        void ExecuteTask(function<void()>task){
            unique_lock<std::mutex>lock(mutex);
            tasks.push_back(task);
            lock.unlock();

            cv.notify_one();
        }
};

void func(){
    cout << "Testing the code" << endl;
}

int main(){
    ThreadPool pool(8);
    pool.ExecuteTask(func);
}