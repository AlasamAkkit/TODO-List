import React, { useState } from 'react';
import './App.css';
import TodoList from './TodoList';
import MarkAllDoneButton from './MarkAll';
import FilterBar from './FilterBar';
import ClearCompleted from './ClearCompleted';

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("All");

  return (
    <div className="todo-list">
      <TodoList todos={todos} setTodos={setTodos} filter={filter} />
      <FilterBar todos={todos} setFilter={setFilter} filter={filter} />
      <ClearCompleted todos={todos} setTodos={setTodos} />
      <MarkAllDoneButton todos={todos} setTodos={setTodos} />
    </div>
  );
}


export default App;
