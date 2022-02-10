import Todo from '../Todo';
import TodoItem from './todo_item/TodoItem';

interface TodoListProps {
  todos: Todo[];

  remove: (id: number) => void;
}

export default function TodoList({ todos, remove }: TodoListProps) {
  return (
    <div className='row mt-4'>
      <div className='col'>
        {todos.map((todo) => (
          <TodoItem todo={todo} key={todo.id} remove={remove} />
        ))}
      </div>
    </div>
  );
}
