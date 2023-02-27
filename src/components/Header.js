import React from 'react'

function Header({handleAddTask, currentTask, setCurrentTask}) {
  return (
    <div>
        <form onSubmit={handleAddTask}>
        <input
          type="text"
          placeholder="What needs to be done?"
          value={currentTask}
          onChange={(e) => setCurrentTask(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAddTask(e)}
        />
      </form>
    </div>
  )
}

export default Header