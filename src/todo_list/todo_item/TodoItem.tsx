import React from 'react';

import Todo from '../../Todo';
import { EditButton, RemoveButton, SaveButton } from './TodoItemButtons';
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

interface TodoItemState {
  editing: boolean;
}

export default class TodoItem extends React.Component<
  TodoItemProps,
  TodoItemState
> {
  // Content waiting to be finally saved
  tmpContent: string;

  constructor(props: TodoItemProps) {
    super(props);

    this.state = {
      editing: false,
    };
    this.tmpContent = '';

    this.toggleEditingState = this.toggleEditingState.bind(this);
    this.remove = this.remove.bind(this);
    this.updateTmpContent = this.updateTmpContent.bind(this);
  }

  toggleEditingState() {
    this.setState((state) => ({ editing: !state.editing }));
  }

  remove() {
    this.props.remove(this.props.todo.id);
  }

  save(content: string) {
    this.props.edit(this.props.todo.id, content);
  }

  updateTmpContent(tmpContent: string) {
    this.tmpContent = tmpContent;
  }

  render() {
    const contentBox = this.state.editing ? (
      <TodoEditor
        content={this.props.todo.content}
        save={this.updateTmpContent}
      />
    ) : (
      <TodoContent content={this.props.todo.content} />
    );

    const editOrSaveButton = this.state.editing ? (
      <SaveButton
        onSave={() => {
          this.toggleEditingState();
          this.save(this.tmpContent);
        }}
      />
    ) : (
      <EditButton onStartEdit={this.toggleEditingState} />
    );

    return (
      <div className='p-2 mb-2 border border-1 rounded-3'>
        <div className='d-flex align-items-start gap-2 mb-2'>
          <div className='flex-grow-1 align-self-center text-muted'>
            {this.props.todo.date.toLocaleString()}
          </div>

          {editOrSaveButton}

          <RemoveButton onRemove={this.remove} />
        </div>
        {contentBox}
      </div>
    );
  }
}
