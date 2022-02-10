import React from 'react';

import AddTodo from './AddTodo/AddTodo';
import TodoList from './TodoList/TodoList';

function App() {
  return (
    <div className='container'>
      <div className='row mt-4'>
        <h2>TODO</h2>
      </div>

      <AddTodo />

      <TodoList />
    </div>
  );
}

export default App;
