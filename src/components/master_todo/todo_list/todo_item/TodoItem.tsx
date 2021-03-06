import React, { useState } from 'react';
import { Link, LinkProps, useNavigate } from 'react-router-dom';

import Todo from '../../../../Todo';
import {
  EditButton,
  RemoveButton,
  SaveButton,
  UndoButton,
} from './TodoItemButtons';
import { TodoContent, TodoEditor } from './TodoItemContent';

type LinkTodoProps = { todoId: number } & Omit<LinkProps, 'to'>;

const LinkTodo = ({ todoId, children, ...props }: LinkTodoProps) => (
  <Link className='text-muted' to={`/todo/${todoId}`} {...props}>
    {children}
  </Link>
);

interface TodoItemProps {
  todo: Todo;

  // Currently, this remove can remove ANY todo
  // TODO: Should this be curried to remove only this particular todo?
  remove: (id: number) => void;
  edit: (id: number, content: string) => void;
}

const TodoItem = ({ todo, ...props }: TodoItemProps) => {
  const navigate = useNavigate();

  // Editing state: toggles textarea and changes buttons
  // - In editing mode: Save, Undo, Remove buttons
  // - Otherwise: Edit & Remove buttons
  const [editing, setEditing] = useState(false);
  const toggleEditing = () => setEditing((editingState) => !editingState);

  // Temp content of textarea (controlled form)
  const [tmpContent, setTmpContent] = useState(todo.content);

  const save = (content: string) => props.edit(todo.id, content);
  const remove = () => {
    props.remove(todo.id);
    navigate('/');
  };

  const contentBox = editing ? (
    <TodoEditor tmpContent={tmpContent} onChange={setTmpContent} />
  ) : (
    <TodoContent content={todo.content} />
  );
  const editOrSaveButton = editing ? (
    <>
      <SaveButton
        onSave={() => {
          toggleEditing();
          save(tmpContent);
        }}
      />
      <UndoButton
        onClick={() => {
          toggleEditing();
          setTmpContent(todo.content);
        }}
      />
    </>
  ) : (
    <EditButton onStartEdit={toggleEditing} />
  );

  return (
    <div className='p-2 mb-2 border border-1 rounded-3'>
      <div className='d-flex align-items-start gap-2 mb-2'>
        <div className='align-self-center pe-2'>
          <LinkTodo todoId={todo.id}>{todo.id}</LinkTodo>
        </div>

        <div className='flex-grow-1 align-self-center'>
          <LinkTodo tabIndex={-1} todoId={todo.id}>
            {todo.date.toLocaleString()}
          </LinkTodo>
        </div>

        {editOrSaveButton}

        <RemoveButton onRemove={remove} />
      </div>
      {contentBox}
    </div>
  );
};

export default TodoItem;
