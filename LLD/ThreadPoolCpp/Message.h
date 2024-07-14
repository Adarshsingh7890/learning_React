#ifndef MESSAGE_H
#define MESSAGE_H

#include <iostream>
#include<string>

using namespace std;

class Message{
    public :
        Message(const string& content): content(content){}
        string content;
};

#endif