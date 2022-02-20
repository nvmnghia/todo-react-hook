import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Todo from '../../../../Todo';
import {
  EditButton,
  RemoveButton,
  SaveButton,
  UndoButton,
} from './TodoItemButtons';
import { TodoContent, TodoEditor } from './TodoItemContent';

interface LinkTodoProps {
  children?: React.ReactNode; // Optional for case without children
  id: number;
}

const LinkTodo = ({ id, children }: LinkTodoProps) => (
  <Link className='text-muted' to={`/todo/${id}`}>
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

const TodoItem = (props: TodoItemProps) => {
  const navigate = useNavigate();

  // Editing state: toggles textarea and changes buttons
  // - In editing mode: Save, Undo, Remove buttons
  // - Otherwise: Edit & Remove buttons
  const [editing, setEditing] = useState(false);
  const toggleEditing = () => setEditing(!editing);

  // Temp content of textarea (controlled form)
  const [tmpContent, setTmpContent] = useState(props.todo.content);

  const save = (content: string) => props.edit(props.todo.id, content);
  const remove = () => {
    props.remove(props.todo.id);
    navigate('/');
  };

  const contentBox = editing ? (
    <TodoEditor tmpContent={tmpContent} onChange={setTmpContent} />
  ) : (
    <TodoContent content={props.todo.content} />
  );
  const editOrSaveButton = editing ? (
    <>
      <SaveButton
        onSave={() => {
          toggleEditing();
          save(tmpContent);
        }}
      />
      <UndoButton onClick={toggleEditing} />
    </>
  ) : (
    <EditButton onStartEdit={toggleEditing} />
  );

  return (
    <div className='p-2 mb-2 border border-1 rounded-3'>
      <div className='d-flex align-items-start gap-2 mb-2'>
        <div className='align-self-center pe-2'>
          <LinkTodo id={props.todo.id}>{props.todo.id}</LinkTodo>
        </div>

        <div className='flex-grow-1 align-self-center'>
          <LinkTodo id={props.todo.id}>
            {props.todo.date.toLocaleString()}
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
