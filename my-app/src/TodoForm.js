import React, { useState } from 'react'

function TodoForm({ addTodo }) {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text) return;
        addTodo({
            id: Math.floor(Math.random() * 10000),
            text: text,
            completed: false,
        });
        setText('')
    };

  return (
    <form onSubmit={handleSubmit}>
        <input
            type="text"
            placeholder="What needs to be done today?"
            value={text}
            onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Add</button>
    </form>
  );
}

export default TodoForm;