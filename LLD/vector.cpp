#include<iostream>
#include <stdexcept>

using namespace std;

template<typename T>
class myVector{
    private:
        T *data;
        size_t capacity;
        size_t size;
    
        void resize(size_t newCapacity){
            T *newData = new T[capacity];
            for (int i = 0 ; i < size; i++){
                newData[i] = data[i];
            }

            delete []data;
            data = newData;
            capacity = newCapacity;
        }
    

    public:
        myVector(): data(nullptr), capacity(0), size(0){}

        ~myVector(){
            delete[]data;
        }

        size_t getSize() const {
            return size;
        }

        size_t getCapacity() const {
            return capacity;
        }

        void push_back(const T& value){
            if (size == capacity){
                resize(capacity == 0?1:2*capacity);
            }
            data[size++] = value;
        }

        void pop_back()  {
            if (size == 0){
                throw std::out_of_range("Pop back on empty vector");
            }else{
                size--;
            }
        }

        T & operator[]( size_t& index){
            if (index >= size) {
                throw std::out_of_range("Index out of range");
            }
            return data[index];
        }

        const T & operator[]( size_t& index) const{
            if (index >= size) {
                throw std::out_of_range("Index out of range");
            }
            return data[index];
        }
};


int main(){
    myVector<int> vec;
    vec.push_back(1);
    vec.push_back(2);
    vec.push_back(3);

    std::cout << "Vector elements: ";
    for (size_t i = 0; i < vec.getSize(); ++i) {
        std::cout << vec[i] << " ";
    }
    std::cout << std::endl;

    vec.pop_back();

    std::cout << "After pop_back, vector elements: ";
    for (size_t i = 0; i < vec.getSize(); ++i) {
        std::cout << vec[i] << " ";
    }
    std::cout << std::endl;

    std::cout << "Vector size: " << vec.getSize() << std::endl;
    std::cout << "Vector capacity: " << vec.getCapacity() << std::endl;

    return 0;
}