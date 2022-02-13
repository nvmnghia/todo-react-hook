import React, { ChangeEvent, FormEvent } from 'react';

const validate = (content: string): boolean => content.trim().length !== 0;

interface AddTodoProps {
  add: (content: string) => void;
}

interface AddTodoState {
  content: string;

  // 3 states
  // - undefined: not yet validated (when the user first types)
  // - true: valid
  // - false: invalid
  valid?: boolean;
}

export default class AddTodo extends React.Component<
  AddTodoProps,
  AddTodoState
> {
  constructor(props: AddTodoProps) {
    super(props);

    this.state = { content: '' };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput({ target: { value: content } }: ChangeEvent<HTMLInputElement>) {
    if (this.state.valid === undefined) {
      // Don't validate just yet when the user first type
      this.setState({ content });
    } else {
      this.setState({
        content,
        valid: validate(content),
      });
    }
  }

  handleSubmit(event: FormEvent) {
    event.preventDefault();

    let valid = this.state.valid;

    // Validate for the first time
    if (valid === undefined) {
      valid = validate(this.state.content);
      this.setState({ valid });
    }

    if (valid) {
      this.props.add(this.state.content);
      this.setState({ content: '', valid: undefined });
    }
  }

  render() {
    let inputValidationState = '';
    if (this.state.valid !== undefined) {
      inputValidationState = this.state.valid ? 'is-valid' : 'is-invalid';
    }

    return (
      // TODO: Must a form be used here?
      <form
        className='row row-cols-md-auto g-3 align-items-top'
        onSubmit={this.handleSubmit}
      >
        <div className='col-md-auto flex-grow-1'>
          <input
            type='text'
            className={`form-control ${inputValidationState}`}
            value={this.state.content}
            onInput={this.handleInput}
            aria-describedby='invalid-input'
            placeholder='Note something'
            required
          />
          <div id='invalid-input' className='invalid-feedback'>
            Todo content only contains spaces.
          </div>
        </div>

        <div className='col-md-auto col-xs-12'>
          <button className='btn btn-primary w-100'>Add</button>
        </div>
      </form>
    );
  }
}
