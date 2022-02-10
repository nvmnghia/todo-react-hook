export default function AddTodo() {
  return (
    <form className='row row-cols-lg-auto g-3 align-items-center'>
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
