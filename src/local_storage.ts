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

const COUNTER_KEY = 'todo-counter';

const getCounter = (): number | undefined => {
  const counterStr = localStorage.getItem(COUNTER_KEY);
  return counterStr ? parseInt(counterStr) : undefined;
};

const setCounter = (counter: number) => {
  localStorage.setItem(COUNTER_KEY, counter.toString());
};

export { getCounter, setCounter };
