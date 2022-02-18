import Todo from './Todo';

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

export { loadFromLocalStorage, saveToLocalStorage };
