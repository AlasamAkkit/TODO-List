import React, { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import Header from "./components/Header";
import Filters from "./components/Filters";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";
import {
  deleteTask,
  toggleCompletion,
  editTask,
  setFilter,
  clearCompleted,
  checkAll,
} from "./actions"


function App() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);
  const filter = useSelector((state) => state.filter);
  const allChecked = useSelector((state) => state.allChecked);
 

  const handleDeleteTask = (index) => {
    dispatch(deleteTask(index));
  };

  const handleToggleCompletion = (index) => {
    dispatch(toggleCompletion({ index }));
  };

  const handleFilterChange = (newFilter) => {
    dispatch(setFilter(newFilter));
  };

  const handleClearCompleted = () => {
    dispatch(clearCompleted());
  };

  const handleTaskDoubleClick = (index) => {
    const newTaskName = prompt("Edit Task:", tasks[index].taskName);
    dispatch(editTask({ index, newTaskName }));
  };

  const handleCheckAll = () => {
   dispatch(checkAll());
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "All") {
      return true;
    } else if (filter === "Active") {
      return !task.completed;
    } else {
      return task.completed;
    }
  });

  useEffect(() => {
    const unfinishedTasks = tasks.filter((task) => !task.completed);
    dispatch({ type: "SET_TASKS_LEFT", payload: unfinishedTasks.length });
  }, [tasks, dispatch]);

  const completedTasks = tasks.filter((task) => task.completed);

  return (
    <div className="App">
      <h1>todos</h1>
      <Header />

      <Filters handleFilterChange={handleFilterChange} />

      <TodoList 
        filteredTasks={filteredTasks} 
        handleDeleteTask={handleDeleteTask}
        handleTaskDoubleClick={handleTaskDoubleClick}
        handleToggleCompletion={handleToggleCompletion}
      />

      <Footer
        handleClearCompleted={handleClearCompleted}
        handleCheckAll={handleCheckAll}
        allChecked={allChecked}
        tasks={tasks}
        completedTasks={completedTasks}
      />
    </div>
  );
}

export default App;