export default class Todo {
  content: string;
  date: Date;

  constructor(content: string) {
    this.content = content;
    this.date = new Date();
  }
}
