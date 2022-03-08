import React, { useCallback, useEffect, useState } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import MasterTodo from './components/master_todo/MasterTodo';
import Todo, { todoFromContent } from './Todo';
import { loadFromLocalStorage, saveToLocalStorage } from './local_storage';
import DetailTodo from './components/detail_todo/DetailTodo';
import NotFound from './components/not_found/NotFound';
import AppOutlet from './components/app_outlet/AppOutlet';

export default function App() {
  console.log('Render <App>');

  // State setup
  const [todos, setTodos] = useState<Todo[]>([]);
  useEffect(() => {
    setTodos(loadFromLocalStorage()); // Load initial
  }, []);
  useEffect(() => {
    saveToLocalStorage(todos); // Save if changed
  }, [todos]);

  // Edit state
  const addTodo = useCallback((content: string) => {
    // Todo constructor has side effect, thus can't be used inside updater function
    const newTodo = todoFromContent(content);
    setTodos((prevTodos) => [newTodo, ...prevTodos]);
  }, []);
  const removeTodo = useCallback((id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }, []);
  const editTodo = useCallback((id: number, content: string) => {
    setTodos((prevTodos) => [
      { id, content, date: new Date() },
      ...prevTodos.filter((todo) => todo.id !== id),
    ]);
  }, []);

  // Links
  const links = todos.map((todo) => (
    <Route
      path={`${todo.id}`}
      element={<DetailTodo todo={todo} remove={removeTodo} edit={editTodo} />}
      key={todo.id}
    />
  ));

  const masterTodo = (
    <MasterTodo
      todos={todos}
      add={addTodo}
      remove={removeTodo}
      edit={editTodo}
    />
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AppOutlet />}>
          <Route path='' element={masterTodo} />
          <Route path='todo'>{links}</Route>
        </Route>

        {/* Route order doesn't seem to affect paths match, which is good */}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
