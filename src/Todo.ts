// Previously, data was stored as OldFormat

import { getCounter, setCounter } from './local_storage';

// This IIFE converts that old format to the new one
(() => {
  type OldFormat = {
    _id: number;
    _content: string;
    _date: string;
  };

  const ITEM_KEY = 'todos'; // TODO: duplicate inside App.tsx
  const data = localStorage.getItem(ITEM_KEY);
  if (!data) {
    return;
  }

  const todos = JSON.parse(data);
  if (!Array.isArray(todos)) {
    throw new Error('We fucked up somewhere');
  }

  if (todos.length === 0) {
    return;
  }

  const sample = todos[0];
  if (!Object.prototype.hasOwnProperty.call(sample, '_id')) {
    // New format, do nothing
    return;
  }

  const newFormat = todos.map((todo: OldFormat) => ({
    id: todo._id,
    content: todo._content,
    date: todo._date, // No need to parse date back and forth
  }));
  localStorage.setItem(ITEM_KEY, JSON.stringify(newFormat));
})();

interface ValidTodoSerialized {
  id: number;
  content: string;
  date: string;
}

export default interface Todo {
  id: number;
  content: string;
  date: Date;
}

// ID of the NEXT todo
let todoCounter = getCounter() ?? 1;

const todoFromContent = (content: string): Todo => {
  const todo: Todo = {
    id: todoCounter,
    content,
    date: new Date(),
  };

  todoCounter++;
  setCounter(todoCounter);

  return todo;
};

const todosFromJSON = (json: string): Todo[] => {
  console.log(json);
  return JSON.parse(json).map(
    (tmp: ValidTodoSerialized) => ({ ...tmp, date: new Date(tmp.date) } as Todo)
  );
};

export { todoFromContent, todosFromJSON };
