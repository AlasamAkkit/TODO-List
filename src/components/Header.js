import React from 'react'
import { addTask } from '../actions'
import { useDispatch } from 'react-redux'

function Header() {
  const dispatch = useDispatch();
  // instead of using the currentTask inside redux store
  // we can create a state for current task for this component
  // to know when we should you redux store, 
  // and when should not, use state, you have to aware the component scope, relationships, interactions with this state
  const [currentTask, setCurrentTask] = React.useState("");

  const handleAddTask = (e) => {
    //add task to redux store
    e.preventDefault();
    if (currentTask !== "") {
      dispatch(addTask(currentTask));
    }
    //reset the current task
    setCurrentTask("");
  }

  const handleChange = (e) => {
    setCurrentTask(e.target.value);
  }

  return (
    // onChange - this should manage internally inside this component
    // why? - because we only add task right after press enter (onSubmit)
    // currently, you dispatch to create new task within onChangeEvent
    // whenever we modify the input value, the addTask action will be triggered => your issue
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