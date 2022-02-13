export default class Todo {
  private static counter = 1;

  readonly id: number;
  private _content: string;
  private _date: Date;

  constructor(content: string) {
    this.id = Todo.counter++;

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
}
