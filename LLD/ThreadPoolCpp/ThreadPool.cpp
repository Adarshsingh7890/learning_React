#include "ThreadPool.h"

ThreadPool::ThreadPool(size_t numThreads){
    for (size_t i = 0; i < numThreads; i++){
        workers.emplace_back();
        threads.emplace_back(ref(workers.back()));
    }
}

void ThreadPool::submit(Message message) {
    workers[rand() % workers.size()].submit(message); // Distribute tasks randomly for demonstration
}

void ThreadPool::shutdown() {
    for (auto& worker : workers)
        worker.stopWorker();

    for (auto& thread : threads)
        thread.join();
}

void ThreadPool::main() {
    ThreadPool threadPool(4); // Create a thread pool of size 4

    // Example messages to send
    Message message1("Hello, world!");
    Message message2("How are you?");
    Message message3("This is a test message.");

    // Submit messages to the thread pool
    threadPool.submit(message1);
    threadPool.submit(message2);
    threadPool.submit(message3);

    // Shutdown the thread pool after all tasks are complete
    threadPool.shutdown();
}