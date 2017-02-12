export enum PriorityTodo {
  NotUrgent,
  Normal,
  Urgent
}

export class Todo {
  constructor(
    public id?: number,
    public name?: string,
    public deadline?: Date,
    public description?: string,
    public finished = false,
    public priority = PriorityTodo.NotUrgent) {
  };
}