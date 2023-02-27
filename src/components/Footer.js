import React from 'react'

function Footer({handleClearCompleted, handleCheckAll, allChecked, completedTasks, tasks, tasksLeft}) {
  return (
    <div>
        {completedTasks.length > 0 && (
        <button onClick={handleClearCompleted}>Clear Completed</button>
      )}
      {tasks.length > 0 && (
        <button onClick={handleCheckAll}>
          {allChecked ? "Uncheck All" : "Check All"}
        </button>
      )}
      
      <p>{tasksLeft} todos left</p>
    </div>
  )
}

export default Footer