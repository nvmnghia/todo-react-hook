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
      <div className='mt-4'>
        {/* Todo item */}
        <div className='row h-100 mb-2 border border-1 rounded-3'>
          <div className='col d-flex flex-row align-items-center'>
            {/* Content */}
            <div className='flex-grow-1'>Something in the way she moves</div>

            {/* Edit */}
            <button className='btn btn-outline-primary m-1'>
              <FontAwesomeIcon icon={faPen}/>
            </button>

            {/* Remove */}
            <button className='btn btn-outline-primary m-1'>
              <FontAwesomeIcon icon={faXmark}/>
            </button>
          </div>
        </div>


        <div className='row h-100 mb-2 border border-1 rounded-3'>
          <div className='col d-flex flex-row align-items-center'>
            <div className='flex-grow-1'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam deserunt facilis incidunt consequuntur placeat repellendus dolores reprehenderit laudantium fugiat, repellat officiis, ducimus fugit totam esse sed sapiente saepe? Eligendi, minus!</div>

            <button className='btn btn-outline-primary m-1'>
              <FontAwesomeIcon icon={faPen}/>
            </button>

            <button className='btn btn-outline-primary m-1'>
              <FontAwesomeIcon icon={faXmark}/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
