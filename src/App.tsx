import React, { useState } from 'react';

import AddTodo from './add_todo/AddTodo';
import Todo from './Todo';
import TodoList from './todo_list/TodoList';

//================================================================================
// Local Storage
//================================================================================

const ITEM_KEY = 'todos';

const loadFromLocalStorage = (): Todo[] => {
  const json = localStorage.getItem(ITEM_KEY);
  if (json === null) {
    return [];
  }

  const tmpArr = JSON.parse(json);
  return tmpArr.map((tmpTodo: any) => Todo.deserialize(tmpTodo));
};

const saveToLocalStorage = (todos: Todo[]) => {
  localStorage.setItem(ITEM_KEY, JSON.stringify(todos));
};

//================================================================================
// App
//================================================================================

export default function App() {
  const [todos, setTodos] = useState(loadFromLocalStorage());

  const addTodo = (content: string) => {
    setTodos(
      wrapTodosManipulator((prevTodos) => [...prevTodos, new Todo(content)])
    );
  };
  const removeTodo = (id: number) => {
    setTodos(
      wrapTodosManipulator((prevTodos) =>
        prevTodos.filter((todo) => todo.id !== id)
      )
    );
  };
  const editTodo = (id: number, content: string) => {
    setTodos(
      wrapTodosManipulator((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === id ? todo.cloneNewContent(content) : todo
        )
      )
    );
  };

  return (
    <div className='container'>
      <div className='row d-flex justify-content-center'>
        <div className='col-md-8'>
          <div className='row mt-4'>
            <h2>TODO</h2>
          </div>

          <AddTodo add={addTodo} />

          <TodoList todos={todos} remove={removeTodo} edit={editTodo} />
        </div>
      </div>
    </div>
  );
}

type TodosManipulator = (prevTodos: Todo[]) => Todo[];
// Add local storage save to function modifying todos
// TODO: is this a suitable place?
const wrapTodosManipulator = (
  manipulator: TodosManipulator
): TodosManipulator => {
  return (prevTodos: Todo[]) => {
    const todos = manipulator(prevTodos);
    saveToLocalStorage(todos);
    return todos;
  };
};
