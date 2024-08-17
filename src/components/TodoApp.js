import React, { useState } from "react";

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
    setInputValue("");
  };

  const deleteTask = (id) => {
    setTodos(
      todos.filter((t) => {
        return t.id != id;
      })
    );
  };

  return (
    <>
      <div className="todo">
        <div className="todo-container">
          <div className="div">
            <input
              type="text"
              placeholder="Enter task"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={handleClick}>+</button>
          </div>
          <ul>
            {todos.map(({ name, id }, index) => (
              <li key={index}>
                <p>{name}</p>
                <p onClick={() => deleteTask(id)}>X</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default TodoApp;
