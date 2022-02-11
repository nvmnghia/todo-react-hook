import React, { ChangeEvent } from 'react';

const TodoContent = ({ content }: { content: string }) => <>{content}</>;

interface TodoEditorProps {
  content: string;
}

interface TodoEditorState {
  content: string;
}

class TodoEditor extends React.Component<TodoEditorProps, TodoEditorState> {
  constructor(props: TodoEditorProps) {
    super(props);

    this.state = {
      content: props.content,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { value } }: ChangeEvent<HTMLTextAreaElement>) {
    this.setState({ content: value });
  }

  render(): React.ReactNode {
    return (
      <textarea
        className='w-100'
        value={this.state.content}
        onChange={this.handleChange}
      ></textarea>
    );
  }
}

export { TodoContent, TodoEditor };
