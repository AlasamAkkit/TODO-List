import React from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { editTask, toggleCompletion } from '../actions'

function TodoList({filteredTasks, handleDeleteTask}) {

  const dispatch = useDispatch()

  const handleToggleCompletion = (index) => {
    dispatch(toggleCompletion(index));
  };

  const handleTaskDoubleClick = (index) => {
    const newTaskName = prompt('Enter new task name');
    if (newTaskName) {
      dispatch(editTask(index, newTaskName));
    }
  }

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