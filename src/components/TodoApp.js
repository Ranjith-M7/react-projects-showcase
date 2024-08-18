import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const generatedId = () => {
  return Math.floor(Math.random() * 1000);
};
function TodoApp() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  const handleClick = () => {
    if (inputValue.trim() === "") return;

    setTodos(
      todos.concat({
        name: inputValue,
        id: generatedId(),
      })
    );
    toast.success("Task added successfully !");
    setInputValue("");
  };

  const deleteTask = (id) => {
    setTodos(
      todos.filter((t) => {
        return t.id != id;
      })
    );
    toast.error("Task deleted successfully !");
  };

  return (
    <>
      <div className="todo d-flex justify-content-center align-items-center">
        <div className="todo-container">
          <h1>Todo App</h1>
          <div className="d-flex justify-content-center align-items-center gap-2">
            <input
              type="text"
              placeholder="Enter task"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={handleClick}>
              <i className="fa-solid fa-plus"></i>
            </button>
          </div>
          <ul>
            {todos.map(({ name, id }, index) => (
              <li
                key={index}
                className="d-flex justify-content-between align-items-center"
              >
                <span>{name}</span>
                <button onClick={() => deleteTask(id)}>
                  <i className="fa-solid fa-trash"></i>
                </button>
              </li>
            ))}
          </ul>
        </div>
        <ToastContainer />
      </div>
    </>
  );
}

export default TodoApp;
