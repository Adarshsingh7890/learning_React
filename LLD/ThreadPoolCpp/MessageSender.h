#ifndef MESSAGE_SENDER_H
#define MESSAGE_SENDER_H

#include "ThreadPool.h" 
#include <condition_variable>
#include <queue>

#include<Message.h>

class MessageSender {
private:
    std::mutex mutex;
    std::condition_variable condition;
    std::queue<Message> tasks;
    bool stop;

public:
    MessageSender();

    void submit(Message message);
    void operator()();
    void stopWorker();
};

#endif // MESSAGE_SENDER_H
