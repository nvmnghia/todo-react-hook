import React, { useEffect, useState } from 'react';

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
  const [todos, setTodos] = useState<Todo[]>([]);
  useEffect(() => {
    setTodos(loadFromLocalStorage());
  }, []);

  useEffect(() => {
    saveToLocalStorage(todos);
  }, [todos]);
  const addTodo = (content: string) => {
    setTodos((prevTodos) => [...prevTodos, new Todo(content)]);
  };
  const removeTodo = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };
  const editTodo = (id: number, content: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? todo.cloneNewContent(content) : todo
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
