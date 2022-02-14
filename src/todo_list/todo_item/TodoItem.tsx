import React, { useState } from 'react';

import Todo from '../../Todo';
import {
  EditButton,
  RemoveButton,
  SaveButton,
  UndoButton,
} from './TodoItemButtons';
import { TodoContent, TodoEditor } from './TodoItemContent';

//================================================================================
// Todo item
//================================================================================

interface TodoItemProps {
  todo: Todo;

  // Currently, this remove can remove ANY todo
  // TODO: Should this be curried to remove only this particular todo?
  remove: (id: number) => void;
  edit: (id: number, content: string) => void;
}

const TodoItem = (props: TodoItemProps) => {
  const [editing, setEditing] = useState(false);
  const toggleEditing = () => setEditing(!editing);

  const [tmpContent, setTmpContent] = useState(props.todo.content);

  const save = (content: string) => props.edit(props.todo.id, content);
  const remove = () => props.remove(props.todo.id);

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
        <div className='align-self-center pe-2 text-muted'>{props.todo.id}</div>

        <div className='flex-grow-1 align-self-center text-muted'>
          {props.todo.date.toLocaleString()}
        </div>

        {editOrSaveButton}

        <RemoveButton onRemove={remove} />
      </div>
      {contentBox}
    </div>
  );
};

export default TodoItem;
