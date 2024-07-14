#ifndef THREAD_POOL_H
#define THREAD_POOL_H

#include "MessageSender.h" // Include necessary dependencies

#include <vector>
#include <thread>
#include <cstdlib> // for rand()

class ThreadPool {
private:
    std::vector<std::thread> threads;
    std::vector<MessageSender> workers;

public:
    ThreadPool(size_t numThreads);

    void submit(Message message);
    void shutdown();

    static void main(); // Static method for testing
};

#endif // THREAD_POOL_H
