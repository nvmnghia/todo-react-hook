import React, { ChangeEvent, FormEvent } from 'react';

const validate = (content: string): AddTodoState => {
  if (content.length === 0) {
    return { content, valid: false, errorMessage: 'Content is empty' };
  }

  if (content.trim().length === 0) {
    return {
      content,
      valid: false,
      errorMessage: 'Content only contains whitespaces',
    };
  }

  return { content, valid: true, errorMessage: '' };
};

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
  errorMessage?: string;
}

export default class AddTodo extends React.Component<
  AddTodoProps,
  AddTodoState
> {
  static DEFAULT_STATE = {
    content: '',
    valid: undefined,
    errorMessage: '',
  };

  constructor(props: AddTodoProps) {
    super(props);

    this.state = { ...AddTodo.DEFAULT_STATE };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput({ target: { value: content } }: ChangeEvent<HTMLInputElement>) {
    if (this.state.valid === undefined) {
      // Don't validate just yet when the user first type
      this.setState({ content });
    } else {
      this.setState(validate(content));
    }
  }

  handleSubmit(event: FormEvent) {
    event.preventDefault();

    let valid = this.state.valid;

    // Validate for the first time
    if (valid === undefined) {
      const validatedState = validate(this.state.content);
      valid = validatedState.valid;
      this.setState(validatedState);
    }

    if (valid) {
      this.props.add(this.state.content); // validate() doesn't modify content
      this.setState({ ...AddTodo.DEFAULT_STATE });
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
        noValidate
      >
        <div className='col-md-auto flex-grow-1'>
          <input
            type='text'
            className={`form-control ${inputValidationState}`}
            value={this.state.content}
            onInput={this.handleInput}
            aria-describedby='invalid-input'
            placeholder='Note something'
          />
          <div id='invalid-input' className='invalid-feedback'>
            {this.state.errorMessage}
          </div>
        </div>

        <div className='col-md-auto col-xs-12'>
          <button className='btn btn-primary w-100'>Add</button>
        </div>
      </form>
    );
  }
}
