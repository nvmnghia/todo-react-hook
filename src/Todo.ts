interface ITodo {
  _id: number;
  _content: string;
  _date: Date;
}

export default class Todo {
  private static counter = 1;

  private _id: number;
  private _content: string;
  private _date: Date;

  constructor(content: string) {
    this._id = Todo.counter++;

    // Try replacing these 2 pricks with this.content = content :)
    // https://stackoverflow.com/questions/49699067/property-has-no-initializer-and-is-not-definitely-assigned-in-the-construc
    this._content = content;
    this._date = new Date();
  }

  // I gave up spread syntax & prototypical inheritance
  cloneNewContent(newContent: string): Todo {
    const clone = Object.create(this);
    clone.content = newContent;
    return clone;
  }

  get content() {
    return this._content;
  }

  set content(content: string) {
    this._content = content;
    this._date = new Date();
  }

  get date() {
    return this._date;
  }

  get id() {
    return this._id;
  }

  static deserialize(input: unknown): Todo {
    const casted = input as ITodo;
    const tmp = new Todo('');
    tmp._id = casted._id;
    tmp._content = casted._content;
    tmp._date = new Date(casted._date);
    return tmp;
  }
}
