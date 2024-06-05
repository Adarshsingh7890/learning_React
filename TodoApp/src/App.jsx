import { useState, useEffect } from 'react'

import './App.css'
import Form from './Components/Form'
import FormList from './Components/FormList'
import { TodoContext, TodoProvider } from './Context/TodoContext'

function App() {

  const [todos, setTodos] = useState([]);

  const addTodo = (todo) =>{
    return setTodos((prev) => [...prev, {id:Date.now(),...todo}])
  }
  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo )))    
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const toggleComplete = (id)=>{
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id)? {...prevTodo, completed:!prevTodo.completed}:prevTodo))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className="App">
        <h1 className="flex justify-center items-center pt-8 text-2xl">Manage Your Work</h1>
        <Form />
        <div >          
            {todos.map((todo) => (
              <div key={todo.id}>
                <FormList todo={todo} />
              </div>
            ))}
        </div>
      </div>
    </TodoProvider>
  )
}

export default App

