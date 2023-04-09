import React, { useState } from 'react';
import InputTodo from './InputTodo';
import TodosList from './TodosList';
import { TodoContext } from './TodoContext';

function TodosLogic() {
  const [todos, setTodos] = useState([]);

  const addTodo = (title) => {
    setTodos([...todos, { title, id: Date.now(), completed: false }]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id, title) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, title };
      } else {
        return todo;
      }
    });

    setTodos(newTodos);
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, deleteTodo, editTodo }}>
      <div>
        <InputTodo />
        <TodosList />
      </div>
    </TodoContext.Provider>
  );
}

export default TodosLogic;
