import React from 'react'
import { setCurrentTask } from '../actions'
import { useDispatch } from 'react-redux'

function Header({handleAddTask, currentTask}) {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setCurrentTask(e.target.value));
  }

  return (
    <div>
        <form onSubmit={handleAddTask}>
        <input
          type="text"
          placeholder="What needs to be done?"
          value={currentTask}
          onChange={handleChange}
          onKeyDown={(e) => e.key === "Enter" && handleAddTask(e)}
        />
      </form>
    </div>
  )
}

export default Header