import React from 'react'
import { useTodo } from '../Context/TodoContext'
import { useState } from 'react'

const Form = () => {
    const [todo, setTodo] = useState("")
    const {addTodo} = useTodo()

    const add = (e) => {
        e.preventDefault()
  
        if (!todo) return
  
        addTodo({ todo, completed: false})
        setTodo("")
    }
    return (
        <form onSubmit = {add} className="flex justify-center items-start mt-8">
        <div className="w-full max-w-md">
            <div className="flex flex-row items-center gap-4">
            <input
                type="text"
                placeholder="Tasks to do"
                value = {todo}
                onChange={(e) => setTodo(e.target.value)}
                className="form-input w-full h-10 p-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
            <button className="px-4 h-10 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                Add
            </button>
            </div>
        </div>
        </form>
    )
}

export default Form