import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faXmark } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div className='container'>
      <h2>TODO</h2>

      {/* Add Todo */}
      <form className='row row-cols-lg-auto g-3 align-items-center'>
        <div className="col-12">
          <input type='text' className='form-control' placeholder='Note something'/>
        </div>

        <div className="col-12">
          <button className='btn btn-primary'>Add</button>
        </div>
      </form>

      {/* Todo list */}
      <div className="row mt-4">
        <div className="col">
          <div className='d-flex gap-2 p-2 mb-2 border border-1 rounded-3'>
            {/* Content */}
            <div className='flex-grow-1 align-self-center'>Something in the way she moves</div>

            {/* Edit */}
            <button className='btn btn-outline-primary'>
              <FontAwesomeIcon icon={faPen}/>
            </button>

            {/* Remove */}
            <button className='btn btn-outline-danger'>
              <FontAwesomeIcon icon={faXmark}/>
            </button>
          </div>

          <div className='d-flex gap-2 p-2 mb-2 border border-1 rounded-3'>
            <div className='flex-grow-1 align-self-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quo est optio necessitatibus! At nam animi vel hic perferendis vero culpa corporis autem dolorum iste. Fuga, quisquam at. Quae, ipsum!</div>
            <button className='btn btn-outline-primary'>
              <FontAwesomeIcon icon={faPen}/>
            </button>
            <button className='btn btn-outline-danger'>
              <FontAwesomeIcon icon={faXmark}/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
