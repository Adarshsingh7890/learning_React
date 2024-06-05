import React, { useState } from 'react';
import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';
import { useTodo } from '../Context/TodoContext';

function FormList({todo}) {

  const [isTodoEditable, setIsTodoEditable] = useState(false)
  const [todoMsg, setTodoMsg] = useState(todo.todo)
  const {updateTodo, deleteTodo, toggleComplete} = useTodo()

  // 
  const editTodo = () => {
    updateTodo(todo.id, {...todo, todo: todoMsg})
    setIsTodoEditable(false)
  }

  const toggleCompleted = () => {
    toggleComplete(todo.id)
  }


  return (
    <div className="flex justify-center">
      <div className="bg-gray-200 p-3 rounded-md mb-2 w-full max-w-md ml-2 md:ml-4 lg:ml-1 mt-6">
        <div className="flex justify-between items-center">
        <input
              type="checkbox"
              className="cursor-pointer"
              checked={todo.completed}
              onChange={toggleCompleted}
          />
        <input
              type="text"
              className={`text-black  ml-1 border-white ${isTodoEditable ? "border-white/10 px-2" : "border-transparent"
            } ${todo.completed ? "line-through" : ""} bg-gray-200`}
              value={todoMsg}
              onChange={(e) => setTodoMsg(e.target.value)}
              readOnly={!isTodoEditable}
          />
          <div className="flex gap-4">
            <button className="text-blue-500 hover:text-blue-700" 
            onClick={() => {
                if (todo.completed) return;

                if (isTodoEditable) {
                    editTodo();
                } else setIsTodoEditable((prev) => !prev);
            }}>
              {isTodoEditable ? "📁" : "✏️"}
            </button>
            <button className="text-red-500 hover:text-red-700" onClick={() => deleteTodo(todo.id)}>
              <RiDeleteBinLine />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormList;
