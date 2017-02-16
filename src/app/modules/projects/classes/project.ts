import { Command } from './command';
import { Todo } from './todo';

export class Project {

  constructor(
    public id: number,
    public name: string,
    public path: string,
    public description: string,
    public image: string = undefined,
    public star = false,
    public keywords: string[] = [],
    public todos: Todo[] = [],
    public commands: Command[] = []
  ) { }

  /**
   * Get todos of the project
   */
  getTodos(): Todo[] {
    return this.todos;
  }

  getTodo(id: number): Todo {
    console.log(this.todos);
    return this.todos.filter((todo: Todo) => todo.id === id)[0];
  }

  /**
   * Creates a new todo
   */
  saveTodo(todo: Todo) {
    this.todos.push(todo);
  }

  /**
   * Updates a todo
   */
  updateTodo(todo: Todo) {
    let newTodo = this.todos.filter((t: Todo) => {
      return t.id === todo.id;
    })[0];
    newTodo = todo;
  }

}
