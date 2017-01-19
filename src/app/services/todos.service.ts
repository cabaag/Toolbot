import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable()
export class TodosService {
  todos: Todo[] = [
    new Todo('Terminar ToolBot', new Date(), true),
    new Todo('Terminar todos de home', new Date()),
  ];

  // tslint:disable-next-line:no-empty
  constructor() {}

  getTodos(): Todo[] {
    return this.todos;
  }

}
