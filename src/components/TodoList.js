import React from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'

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
            <button onClick={() => handleDeleteTask(index)}><AiFillCloseCircle /></button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList