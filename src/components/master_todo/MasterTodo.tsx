import React, { useEffect } from 'react';

import AddTodo from './add_todo/AddTodo';
import Todo from '../../Todo';
import TodoList from './todo_list/TodoList';

interface MasterTodoProps {
  todos: Todo[];
  add: (content: string) => void;
  remove: (id: number) => void;
  edit: (id: number, content: string) => void;
}

export default function MasterTodo(props: MasterTodoProps) {
  const numOfTodos = props.todos.length;
  useEffect(() => {
    document.title = numOfTodos === 0 ? 'All done' : `${numOfTodos} todos left`;
  }, [numOfTodos]);

  return (
    <>
      <div className='row mt-4'>
        <h2>TODO</h2>
      </div>

      <AddTodo add={props.add} />

      <TodoList todos={props.todos} remove={props.remove} edit={props.edit} />
    </>
  );
}
