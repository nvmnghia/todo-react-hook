import React from 'react';

import Todo from '../Todo';
import TodoItem from './todo_item/TodoItem';

interface TodoListProps {
  todos: Todo[];

  remove: (id: number) => void;
  edit: (id: number, content: string) => void;
}

export default function TodoList({ todos, remove, edit }: TodoListProps) {
  return (
    <div className='row mt-4'>
      <div className='col'>
        {todos.map((todo) => (
          <TodoItem todo={todo} key={todo.id} remove={remove} edit={edit} />
        ))}
      </div>
    </div>
  );
}
