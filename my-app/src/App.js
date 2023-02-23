import React, { useState, useEffect } from 'react';
import './App.css';
import TodoList from './TodoList';
import MarkAllDoneButton from './MarkAll';
import FilterBar from './FilterBar';
import ClearCompleted from './ClearCompleted';
import TodoForm from './TodoForm';

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("All");

  const [filteredTodos, setFilteredTodos] = useState([]);
  useEffect(() => {
    switch (filter) {
      case 'Active':
        setFilteredTodos(todos.filter(todo => !todo.completed));
        break;
      case 'Completed':
        setFilteredTodos(todos.filter(todo => todo.completed));
        break;
      default:
        setFilteredTodos(todos);
    }
  }, [todos, filter]);

  return (
    <div className="todo-list">
      <TodoForm todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} filter={filter} />
      <FilterBar todos={filteredTodos} setFilter={setFilter} filter={filter} />
      <ClearCompleted todos={todos} setTodos={setTodos} />
      <MarkAllDoneButton todos={todos} setTodos={setTodos} />
    </div>
  );
}


export default App;
