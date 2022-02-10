import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faXmark } from '@fortawesome/free-solid-svg-icons';

import Todo from '../../Todo';

interface TodoItemProps {
  todo: Todo;

  remove: (id: number) => void;
}

export default class TodoItem extends React.Component<TodoItemProps, {}> {
  render() {
    return (
      <div className='d-flex align-items-start gap-2 p-2 mb-2 border border-1 rounded-3'>
        {/* Content */}
        <div className='flex-grow-1 align-self-center'>
          {this.props.todo.content}
        </div>

        {/* Edit */}
        <button className='btn btn-outline-primary'>
          <FontAwesomeIcon icon={faPen} />
        </button>

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
