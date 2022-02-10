export default function AddTodo() {
  return (
    <form className='row row-cols-lg-auto g-3 align-items-center'>
      <div className="col-12">
        <input type='text' className='form-control' placeholder='Note something'/>
      </div>

      <div className="col-12">
        <button className='btn btn-primary'>Add</button>
      </div>
    </form>
  );
}
