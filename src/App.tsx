import React from 'react';

import AddTodo from './add_todo/AddTodo';
import Todo from './Todo';
import TodoList from './todo_list/TodoList';

interface AppState {
  todos: Todo[];
}

class App extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      todos: [
        new Todo('Something in the way she moves'),
        new Todo(
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        ),
      ],
    };
  }

  removeTodo(id: number) {
    this.setState((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    }));
  }

  render() {
    return (
      <div className='container'>
        <div className='row d-flex justify-content-center'>
          <div className='col-md-8'>
            <div className='row mt-4'>
              <h2>TODO</h2>
            </div>

            <AddTodo />

            <TodoList
              todos={this.state.todos}
              remove={this.removeTodo.bind(this)}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
