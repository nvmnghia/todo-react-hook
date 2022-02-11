import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faPen, faXmark } from '@fortawesome/free-solid-svg-icons';

import Todo from '../../Todo';

//================================================================================
// Content box
//================================================================================

const ShowTodo = ({ content }: { content: string }) => <>{content}</>;

const EditTodo = ({ content }: { content: string }) => (
  <textarea className='w-100' defaultValue={content}></textarea>
);

//================================================================================
// Buttons
//================================================================================

const EditButton = ({ onStartEdit }: { onStartEdit: () => void }) => (
  <button className='btn btn-outline-primary' onClick={onStartEdit}>
    <FontAwesomeIcon icon={faPen} />
  </button>
);

const SaveButton = ({ onSave }: { onSave: () => void }) => (
  <button className='btn btn-outline-primary' onClick={onSave}>
    <FontAwesomeIcon icon={faCheck} />
  </button>
);

const RemoveButton = ({ onRemove }: { onRemove: () => void }) => (
  <button className='btn btn-outline-danger' onClick={onRemove}>
    <FontAwesomeIcon icon={faXmark} />
  </button>
);

//================================================================================
// Todo item
//================================================================================

interface TodoItemProps {
  todo: Todo;

  // Currently, this remove can remove ANY todo
  // TODO: Should this be curried to remove only this particular todo?
  remove: (id: number) => void;
}

interface TodoItemState {
  editing: boolean;
}

export default class TodoItem extends React.Component<
  TodoItemProps,
  TodoItemState
> {
  constructor(props: TodoItemProps) {
    super(props);

    this.state = {
      editing: false,
    };

    this.toggleEditingState = this.toggleEditingState.bind(this);
    this.remove = this.remove.bind(this);
  }

  toggleEditingState() {
    this.setState((state) => ({ editing: !state.editing }));
  }

  remove() {
    this.props.remove(this.props.todo.id);
  }

  render() {
    const contentBox = this.state.editing ? (
      <EditTodo content={this.props.todo.content} />
    ) : (
      <ShowTodo content={this.props.todo.content} />
    );

    const editOrSaveButton = this.state.editing ? (
      <SaveButton onSave={this.toggleEditingState} />
    ) : (
      <EditButton onStartEdit={this.toggleEditingState} />
    );

    return (
      <div className='d-flex align-items-start gap-2 p-2 mb-2 border border-1 rounded-3'>
        <div className='flex-grow-1 align-self-center'>{contentBox}</div>

        {editOrSaveButton}

        <RemoveButton onRemove={this.remove} />
      </div>
    );
  }
}
