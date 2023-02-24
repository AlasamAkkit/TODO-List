import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Filters from "./components/Filters";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";


function App() {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState("");
  const [filter, setFilter] = useState("All");
  const [allChecked, setAllChecked] = useState(false);
  const [tasksLeft, setTasksLeft] = useState(0);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (currentTask !== "") {
      setTasks([...tasks, { taskName: currentTask, completed: false }]);
      setCurrentTask("");
    }
  };

  const handleDeleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const handleToggleCompletion = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const handleClearCompleted = () => {
    const newTasks = tasks.filter((task) => !task.completed);
    setTasks(newTasks);
  };

  const handleTaskDoubleClick = (index) => {
    const newTasks = [...tasks];
    const newTaskName = prompt("Edit Task:", tasks[index].taskName);
    newTasks[index].taskName = newTaskName;
    setTasks(newTasks);
  };

  const handleCheckAll = () => {
    const newTasks = [...tasks];
    if (!allChecked) {
      newTasks.forEach((task) => (task.completed = true));
      setAllChecked(true);
    } else {
      newTasks.forEach((task) => (task.completed = false));
      setAllChecked(false);
    }
    setTasks(newTasks);
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
    setTasksLeft(unfinishedTasks.length);
  }, [tasks]);

  const completedTasks = tasks.filter((task) => task.completed);

  return (
    <div className="App">
      <h1>Todo List</h1>
      <Header
        handleAddTask={handleAddTask}
        currentTask={currentTask}
        setCurrentTask={setCurrentTask}
      />

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
        tasksLeft={tasksLeft}
        completedTasks={completedTasks}
      />
    </div>
  );
}

export default App;