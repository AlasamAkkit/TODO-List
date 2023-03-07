import React from 'react'
import { useSelector } from 'react-redux';

function Footer({handleClearCompleted, handleCheckAll, allChecked, completedTasks, tasks}) {
  const tasksLeft = useSelector((state) => state.tasksLeft);

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