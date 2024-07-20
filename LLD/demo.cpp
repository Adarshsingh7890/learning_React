#include <iostream>

using namespace std;

class Demo{
    public:
        int temp;
        virtual void helper(int ans) = 0;
};

class Alpha : public Demo{
    public:
        void helper(int ans)override{
            cout << "Hey Adarsh!" << endl;
        }
};

int main(){
    Alpha d;
    d.helper(10);
    return 0;
}