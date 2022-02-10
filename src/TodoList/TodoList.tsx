import { Todo } from "../Todo";
import TodoItem from "./TodoItem/TodoItem"

export default function TodoList() {
  return (
    <div className="row mt-4">
      <div className="col">
        <TodoItem todo={new Todo('Something in the way she moves')} />

        <TodoItem todo={new Todo('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')}/>
      </div>
    </div>
  );
}
