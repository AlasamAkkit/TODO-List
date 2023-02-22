//icon button to mark all tasks as done.

import React from 'react'
import { FaCheck } from "react-icons/fa";

function MarkAllDoneButton({ todos, setTodos }) {

    const handleMarkAllDone = () => {
        const updatedTodos = todos.map((todo) => ({ ...todos, completed: true }));
        setTodos(updatedTodos);
    };

  return (
    <button onClick={handleMarkAllDone}>
        <FaCheck />
    </button>
  );
}

export default MarkAllDoneButton