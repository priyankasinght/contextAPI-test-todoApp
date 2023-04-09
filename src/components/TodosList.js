import React, { useContext } from 'react';
import TodoItem from './TodoItem';
import { TodoContext } from './TodoContext';

function TodosList() {
  const { todos } = useContext(TodoContext);

  return (
    <div>
      {todos.length ? (
        <ul>
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </ul>
      ) : (
        <p>No todos to display</p>
      )}
    </div>
  );
}

export default TodosList;

