import React from 'react';

import Todo from '../../Todo';
import TodoItem from '../master_todo/todo_list/todo_item/TodoItem';

interface DetailTodoProps {
  todo: Todo;
  remove: (id: number) => void;
  edit: (id: number, content: string) => void;
}

export default function DetailTodo(props: DetailTodoProps) {
  return (
    <>
      <div className='row mt-4'>
        <h3>Todo #{props.todo.id}</h3>
      </div>

      <TodoItem todo={props.todo} remove={props.remove} edit={props.edit} />
    </>
  );
}
