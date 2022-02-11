import React, { ChangeEvent, FormEvent } from 'react';

interface AddTodoProps {
  add: (content: string) => void;
}

interface AddTodoState {
  content: string;
}

export default class AddTodo extends React.Component<
  AddTodoProps,
  AddTodoState
> {
  constructor(props: AddTodoProps) {
    super(props);

    this.state = {
      content: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target: { value } }: ChangeEvent<HTMLInputElement>) {
    this.setState({ content: value });
  }

  handleSubmit(event: FormEvent) {
    event.preventDefault();
    this.props.add(this.state.content);
  }

  render() {
    return (
      // TODO: Must a form be used here?
      <form
        className='row row-cols-md-auto g-3 align-items-center'
        onSubmit={this.handleSubmit}
      >
        <div className='col-md-auto flex-grow-1'>
          <input
            type='text'
            className='form-control'
            value={this.state.content}
            onChange={this.handleChange}
            placeholder='Note something'
          />
        </div>

        <div className='col-md-auto col-xs-12'>
          <button className='btn btn-primary w-100'>Add</button>
        </div>
      </form>
    );
  }
}
