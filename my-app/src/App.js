import React, { useState } from 'react';
import './App.css';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import MarkAll from './MarkAll';
import FilterBar from './FilterBar';
import ClearCompleted from './ClearCompleted';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodo= {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  }

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const [filter, setFilter] = useState('All');

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'All') {
      return true;
    } else if (filter === 'Active') {
      return !todo.completed;
    } else if (filter === 'Completed') {
      return todo.completed;
    }
    return true;
  });

  const markAllDone = () => {
    const updatedTodos = todos.map ((todo) => {
      return { ...todo, completed: true };
    });
    setTodos(updatedTodos);
  };

  return (
    <div className="todo-list">
      <h1>todos</h1>
      <TodoForm addTodo={addTodo} />
      <MarkAll markAllDone={markAllDone} />
      <TodoList todos={filteredTodos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      <FilterBar setFilter={setFilter} filter={filter} />
      <ClearCompleted todos={todos} clearCompleted={ClearCompleted} />
    </div>
  );
}

export default App;
