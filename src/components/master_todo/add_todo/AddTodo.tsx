import React, { ChangeEvent, FormEvent, useState } from 'react';

//================================================================================
// Validation
//================================================================================

type ValidationState = boolean | undefined;
interface ValidationResult {
  // 3 states
  // - undefined: not yet validated (when the user first types)
  // - true: valid
  // - false: invalid
  valid: ValidationState;
  msg: string;
}

const validate = (content: string): ValidationResult => {
  if (content.length === 0) {
    return { valid: false, msg: 'Content is empty' };
  }

  if (content.trim().length === 0) {
    return {
      valid: false,
      msg: 'Content only contains whitespaces',
    };
  }

  return { valid: true, msg: '' };
};

//================================================================================
// Add Todo
//================================================================================

interface AddTodoProps {
  add: (content: string) => void;
}

const DEFAULT = {
  content: '',
  validationResult: { valid: undefined as ValidationState, msg: '' },
};

export default function AddTodo({ add }: AddTodoProps) {
  console.log('Render <AddTodo>');

  const [content, setContent] = useState(DEFAULT.content);
  const [validationResult, setValidationResult] = useState<ValidationResult>(
    DEFAULT.validationResult
  );

  const handleInput = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    if (validationResult.valid === undefined) {
      // Don't validate just yet when the user first type
    } else {
      setValidationResult(validate(value));
    }
    setContent(value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    let { valid } = validationResult;

    if (valid === undefined) {
      // Validate for the first time
      const _validationResult = validate(content);
      valid = _validationResult.valid;

      setValidationResult(_validationResult);
    }

    if (valid) {
      add(content);

      setContent(DEFAULT.content);
      setValidationResult(DEFAULT.validationResult);
    }
  };

  let bsInputValidationState = '';
  if (validationResult.valid !== undefined) {
    bsInputValidationState = validationResult.valid ? 'is-valid' : 'is-invalid';
  }

  return (
    // TODO: Must a form be used here?
    <form
      className='row row-cols-md-auto g-3 align-items-top'
      onSubmit={handleSubmit}
      noValidate
    >
      <div className='col-md-auto flex-grow-1'>
        <input
          autoFocus
          type='text'
          className={`form-control ${bsInputValidationState}`}
          value={content}
          onInput={handleInput}
          aria-describedby='invalid-input'
          placeholder='Note something'
        />
        <div id='invalid-input' className='invalid-feedback'>
          {validationResult.msg}
        </div>
      </div>

      <div className='col-md-auto col-xs-12'>
        <button className='btn btn-primary w-100'>Add</button>
      </div>
    </form>
  );
}
