import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, setTodos, filteredTodos }) {
  return (
    <ul className="todo-list">
        {filteredTodos.map((todo) => (
            <TodoItem
                key={todo.id}
                todo={todo}
                todos={todos}
                setTodos={setTodos}
            />
        ))}
    </ul>
  );
}

export default TodoList