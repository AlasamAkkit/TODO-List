import React from 'react';
import './App.css';
import TodoList from './TodoList';
import MarkAllDoneButton from './Header';

function App() {

  return (
    <div className="todo-list">
      <TodoList />
      <MarkAllDoneButton />
    </div>
  );
}

export default App;
