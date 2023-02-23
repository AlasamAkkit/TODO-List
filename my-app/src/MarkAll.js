import React from 'react'

function MarkAll({ todos, setTodos }) {
    const handleMarkAllDone = () => {
        const updatedTodos = todos.map((todo) => {
            return { ...todo, completed: true };
        });
        setTodos(updatedTodos);
    };

    const allCompleted = todos.every((todo) => todo.completed);

  return (
    <div>
        <button onClick={handleMarkAllDone} disabled={allCompleted}>
            Mark All Done
        </button>
    </div>
  );
}

export default MarkAll;