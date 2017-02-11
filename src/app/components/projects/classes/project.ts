import { Todo } from './../../services/todo';

export class Project {
  constructor(
    public id: number,
    public name: string,
    public path: string,
    public description: string,
    public image: string = undefined,
    public star = false,
    public keywords: string[] = [],
    public todos: Todo[] = []
  ) { }

  getTodos(): Todo[] {
    return this.todos;
  }
}
