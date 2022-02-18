import Todo, { todosFromJSON } from './Todo';

const ITEM_KEY = 'todos';

const loadFromLocalStorage = (): Todo[] => {
  const json = localStorage.getItem(ITEM_KEY);
  if (json === null) {
    return [];
  }

  return todosFromJSON(json);
};

const saveToLocalStorage = (todos: Todo[]) => {
  localStorage.setItem(ITEM_KEY, JSON.stringify(todos));
};

export { loadFromLocalStorage, saveToLocalStorage };
