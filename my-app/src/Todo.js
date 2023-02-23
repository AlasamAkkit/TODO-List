import React from 'react'

function Todo({ todo, toggleComplete, deleteTodo }) {
    const handleCheckboxClick = () => {
        toggleComplete(todo.id);
    };

    const handleDeleteClick = () => {
        deleteTodo(todo.id);
    }

  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
        <input
            type="checkbox"
            checked={todo.completed}
            onChange={handleCheckboxClick}
        />
        <span>{todo.text}</span>
        <button className="delete-btn" onClick={handleDeleteClick}>
            X
        </button>
    </li>
  );
}

export default Todo;