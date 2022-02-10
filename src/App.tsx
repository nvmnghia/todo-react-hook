import React from 'react';

import AddTodo from './AddTodo/AddTodo';
import TodoList from './TodoList/TodoList';

function App() {
  return (
    <div className='container'>
      <h2>TODO</h2>

      <AddTodo />

      <TodoList />
    </div>
  );
}

export default App;
