import React from 'react';

import AddTodo from './add_todo/AddTodo';
import TodoList from './todo_list/TodoList';

function App() {
  return (
    <div className='container'>
      <div className='row d-flex justify-content-center'>
        <div className='col-md-8'>
          <div className='row mt-4'>
            <h2>TODO</h2>
          </div>

          <AddTodo />

          <TodoList />
        </div>
      </div>
    </div>
  );
}

export default App;
