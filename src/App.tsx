import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import MasterTodo from './components/master_todo/MasterTodo';

export default function App() {
  return (
    <BrowserRouter>
      <MasterTodo />
    </BrowserRouter>
  );
}
