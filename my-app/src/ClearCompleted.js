import React from 'react'

function ClearCompleted({ todos, setTodos }) {
    const handleClearCompleted = () => {
        setTodos(todos.filter((todo) => !todo.completed));
    };

    const hasCompletedTodos = todos.some((todo) => todo.completed)

  return (
    <div>
        <button
            onClick={handleClearCompleted}
            disabled={!hasCompletedTodos}
        >
            Clear Completed
        </button>
    </div>
  )
}

export default ClearCompleted