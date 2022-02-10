export default class Todo {
  private static counter: number = 1;

  content: string;
  date: Date;
  id: number;

  constructor(content: string) {
    this.content = content;
    this.date = new Date();
    this.id = Todo.counter++;
  }
}
