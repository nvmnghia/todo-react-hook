import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faXmark } from '@fortawesome/free-solid-svg-icons'
import { Todo } from '../../Todo';


interface TodoItemProps {
  todo: Todo;
}

export default function TodoItem(props: TodoItemProps) {
  return (
    <div className='d-flex align-items-start gap-2 p-2 mb-2 border border-1 rounded-3'>
      {/* Content */}
      <div className='flex-grow-1 align-self-center'>
        { props.todo.content }
      </div>

      {/* Edit */}
      <button className='btn btn-outline-primary'>
        <FontAwesomeIcon icon={faPen}/>
      </button>

      {/* Remove */}
      <button className='btn btn-outline-danger'>
        <FontAwesomeIcon icon={faXmark}/>
      </button>
    </div>
  );
}
