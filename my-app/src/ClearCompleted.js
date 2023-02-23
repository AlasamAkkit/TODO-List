import React from 'react'

function ClearCompleted({ todos, setTodos }) {
    const handleClearCompleted = () => {
        setTodos(todos.filter((todo) => !todo.completed));
    };

    const hasCompletedTodos = todos.some((todo) => todo.completed);

  return (
    <div className="clear-completed">
        {hasCompletedTodos && (
            <button className="clear-completed-button" onClick={handleClearCompleted}>
                Clear completed
            </button>
        )}
    </div>
  );
}

export default ClearCompleted;