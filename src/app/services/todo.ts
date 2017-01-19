export class Todo {
  constructor(
    public name: string,
    public deadline: Date,
    public finished: boolean = false) {
  }
}
