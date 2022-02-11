import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import Todo from '../../Todo';
import EditSaveComboButton from './EditSaveComboButton';

interface TodoItemProps {
  todo: Todo;

  remove: (id: number) => void;
}

interface TodoItemState {
  editing: boolean;
}

const showTodo = (content: string) => <>{content}</>;

const editTodo = (content: string) => (
  <textarea className='w-100' defaultValue={content}></textarea>
);

export default class TodoItem extends React.Component<
  TodoItemProps,
  TodoItemState
> {
  constructor(props: TodoItemProps) {
    super(props);

    this.state = {
      editing: false,
    };
  }

  render() {
    const contentBox = this.state.editing
      ? editTodo(this.props.todo.content)
      : showTodo(this.props.todo.content);

    return (
      <div className='d-flex align-items-start gap-2 p-2 mb-2 border border-1 rounded-3'>
        <div className='flex-grow-1 align-self-center'>{contentBox}</div>

        <EditSaveComboButton
          onStartEdit={() => this.setState({ editing: true })}
          onSave={() => this.setState({ editing: false })}
        />

        {/* Remove */}
        <button
          className='btn btn-outline-danger'
          onClick={() => this.props.remove(this.props.todo.id)}
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>
    );
  }
}
