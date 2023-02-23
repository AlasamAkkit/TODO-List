import React from 'react'

function TodoItem({ todo, toggleCompleted, deleteTodo }) {
    const handleCompletedToggle = () => {
        toggleCompleted(todo.id);
    };

    const handleDelete = () => {
        deleteTodo(todo.id);
    };

  return (
    <li className={`todo-item${todo.completed ? ' completed' : ''}`}>
        <div className="todo-item-left">
            <input  
                type="checkbox"
                checked={todo.completed}
                onChange={handleCompletedToggle}
            />
            <p>{todo.task}</p>
        </div>
        <div className="todo-item-right">
            <button className="delete-btn" onClick={handleDelete}>
                <i className="fas fa-trash"></i>
            </button>
        </div>
    </li>
  );
}

export default TodoItem;