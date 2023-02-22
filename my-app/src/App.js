import React, { useState } from 'react';
import './App.css';
import TodoList from './TodoList';
import MarkAllDoneButton from './MarkAll';
import FilterBar from './FilterBar';
import ClearCompleted from './ClearCompleted';

function App() {

  const [todos, setTodos] = useState([])

  return (
    <div className="todo-list">
      <TodoList />
      <FilterBar />
      <ClearCompleted todos={todos} setTodos={setTodos} />
      <MarkAllDoneButton />
    </div>
  );
}

export default App;
