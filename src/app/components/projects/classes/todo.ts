export class Todo {
  constructor(
    public id: number,
    public name?: string,
    public deadline?: Date,
    public finished = false) {
  } 
}