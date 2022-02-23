import React, { useEffect } from 'react';

import Todo from '../../Todo';
import TodoItem from '../master_todo/todo_list/todo_item/TodoItem';

interface DetailTodoProps {
  todo: Todo;
  remove: (id: number) => void;
  edit: (id: number, content: string) => void;
}

const truncate = (str: string, len = 25) =>
  str.length <= len ? str : `${str.substring(0, len - 1)}...`;

export default function DetailTodo({ todo, remove, edit }: DetailTodoProps) {
  useEffect(() => {
    document.title = `#${todo.id}: ${truncate(todo.content)}`;
  }, []);

  return (
    <>
      <div className='row mt-4'>
        <h3>Todo #{todo.id}</h3>
      </div>

      <TodoItem todo={todo} remove={remove} edit={edit} />
    </>
  );
}
