import React from 'react'

function TodoList({filteredTasks, handleToggleCompletion, handleDeleteTask, handleTaskDoubleClick}) {
  return (
    <div>
        <ul>
        {filteredTasks && filteredTasks.map((task, index) => (
          <li key={index} onDoubleClick={() => handleTaskDoubleClick(index)}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggleCompletion(index)}
            />
            {task.taskName}
            <button onClick={() => handleDeleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList