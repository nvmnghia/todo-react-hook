import React, { useEffect, useState } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import MasterTodo from './components/master_todo/MasterTodo';
import Todo, { todoFromContent } from './Todo';
import { loadFromLocalStorage, saveToLocalStorage } from './local_storage';
import DetailTodo from './components/detail_todo/DetailTodo';

export default function App() {
  // State setup
  const [todos, setTodos] = useState<Todo[]>([]);
  useEffect(() => {
    setTodos(loadFromLocalStorage()); // Load initial
  }, []);
  useEffect(() => {
    saveToLocalStorage(todos); // Save if changed
  }, [todos]);

  // Edit state
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

  // Links
  const links = todos.map((todo) => (
    <Route path={`${todo.id}`} element={<DetailTodo />} key={todo.id} />
  ));

  const masterTodo = (
    <MasterTodo
      todos={todos}
      addTodo={addTodo}
      removeTodo={removeTodo}
      editTodo={editTodo}
    />
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={masterTodo} />
        {links}
      </Routes>
    </BrowserRouter>
  );
}
