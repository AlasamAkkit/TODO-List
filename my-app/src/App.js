import React from 'react';
import './App.css';
import TodoList from './TodoList';
import MarkAllDoneButton from './MarkAll';
import FilterBar from './FilterBar';
import ClearCompleted from './ClearCompleted';

function App() {

  return (
    <div className="todo-list">
      <TodoList />
      <FilterBar />
      <ClearCompleted />
      <MarkAllDoneButton />
    </div>
  );
}

export default App;
