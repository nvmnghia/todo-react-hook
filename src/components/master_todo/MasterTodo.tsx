import React from 'react';

import AddTodo from './add_todo/AddTodo';
import Todo from '../../Todo';
import TodoList from './todo_list/TodoList';

interface MasterTodoProps {
  todos: Todo[];
  addTodo: (content: string) => void;
  removeTodo: (id: number) => void;
  editTodo: (id: number, content: string) => void;
}

export default function MasterTodo(props: MasterTodoProps) {
  return (
    <div className='container'>
      <div className='row d-flex justify-content-center'>
        <div className='col-md-8'>
          <div className='row mt-4'>
            <h2>TODO</h2>
          </div>

          <AddTodo add={props.addTodo} />

          <TodoList
            todos={props.todos}
            remove={props.removeTodo}
            edit={props.editTodo}
          />
        </div>
      </div>
    </div>
  );
}
