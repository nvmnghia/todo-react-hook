import React, { useEffect, useState } from 'react';

import AddTodo from './add_todo/AddTodo';
import Todo, { todoFromContent } from '../../Todo';
import { loadFromLocalStorage, saveToLocalStorage } from '../../local_storage';
import TodoList from './todo_list/TodoList';

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  useEffect(() => {
    setTodos(loadFromLocalStorage());
  }, []);

  useEffect(() => {
    saveToLocalStorage(todos);
  }, [todos]);
  const addTodo = (content: string) => {
    // Todo constructor has side effect, thus can't be used inside updater function
    const newTodo = todoFromContent(content);
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };
  const removeTodo = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };
  const editTodo = (id: number, content: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { id, content, date: new Date() } : todo
      )
    );
  };

  return (
    <div className='container'>
      <div className='row d-flex justify-content-center'>
        <div className='col-md-8'>
          <div className='row mt-4'>
            <h2>TODO</h2>
          </div>

          <AddTodo add={addTodo} />

          <TodoList todos={todos} remove={removeTodo} edit={editTodo} />
        </div>
      </div>
    </div>
  );
}
