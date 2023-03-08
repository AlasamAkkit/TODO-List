import React from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { toggleCompletion } from '../actions'

function TodoList({filteredTasks, handleDeleteTask, handleTaskDoubleClick}) {

  const dispatch = useDispatch()

  const handleToggleCompletion = (index) => {
    dispatch(toggleCompletion({ index }));
  };

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