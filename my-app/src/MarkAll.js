import React from 'react';
import { FaCheck } from 'react-icons/fa';

function MarkAllDoneButton({ todos, setTodos }) {
  const handleMarkAllDone = () => {
    const updatedTodos = todos.map(todo => ({ ...todo, isComplete: true }));
    setTodos(updatedTodos);
  };

  return (
    <button onClick={handleMarkAllDone}>
      <FaCheck />
    </button>
  );
}

export default MarkAllDoneButton;
