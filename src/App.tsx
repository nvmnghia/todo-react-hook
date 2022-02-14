import React from 'react';

import AddTodo from './add_todo/AddTodo';
import Todo from './Todo';
import TodoList from './todo_list/TodoList';

interface AppState {
  todos: Todo[];
}

class App extends React.Component<unknown, AppState> {
  constructor(props: unknown) {
    super(props);

    this.state = {
      todos: App.loadFromLocalStorage(),
    };

    this.addTodo = this.addTodo.bind(this);
    this.editTodo = this.editTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  addTodo(content: string) {
    this.setState((state) => {
      const todos = [...state.todos, new Todo(content)];
      App.saveToLocalStorage(todos);
      return { todos };
    });
  }

  removeTodo(id: number) {
    this.setState((state) => {
      const todos = state.todos.filter((todo) => todo.id !== id);
      App.saveToLocalStorage(todos);
      return { todos };
    });
  }

  editTodo(id: number, content: string) {
    this.setState((state) => {
      const todos = state.todos.map((todo) =>
        todo.id === id ? todo.cloneNewContent(content) : todo
      );
      App.saveToLocalStorage(todos);
      return { todos };
    });
  }

  render() {
    return (
      <div className='container'>
        <div className='row d-flex justify-content-center'>
          <div className='col-md-8'>
            <div className='row mt-4'>
              <h2>TODO</h2>
            </div>

            <AddTodo add={this.addTodo} />

            <TodoList
              todos={this.state.todos}
              remove={this.removeTodo}
              edit={this.editTodo}
            />
          </div>
        </div>
      </div>
    );
  }

  private static ITEM_KEY = 'todos';

  private static saveToLocalStorage(todos: Todo[]) {
    localStorage.setItem(this.ITEM_KEY, JSON.stringify(todos));
  }

  // TODO: rewrite this whole parsing method & the Todo class itself
  private static loadFromLocalStorage(): Todo[] {
    const json = localStorage.getItem(this.ITEM_KEY);
    if (json === null) {
      return [];
    }

    const tmpArr = JSON.parse(json);
    return tmpArr.map((tmpTodo: any) => Todo.deserialize(tmpTodo));
  }
}

export default App;
