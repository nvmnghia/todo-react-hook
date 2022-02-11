import { FormEvent } from 'react';

export default function AddTodo() {
  const preventSubmit = (event: FormEvent) => event.preventDefault();

  return (
    // TODO: Must a form be used here?
    <form
      className='row row-cols-md-auto g-3 align-items-center'
      onSubmit={preventSubmit}
    >
      <div className='col-md-auto flex-grow-1'>
        <input
          type='text'
          className='form-control'
          placeholder='Note something'
        />
      </div>

      <div className='col-md-auto col-xs-12'>
        <button className='btn btn-primary w-100'>Add</button>
      </div>
    </form>
  );
}
