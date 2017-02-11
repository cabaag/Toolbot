import { Injectable } from '@angular/core';
import { Project } from './../classes/project';
import { ProjectsService } from './projects.service';
import { Todo } from './../classes/todo';

@Injectable()
export class TodosService {
  todos: Todo[] = [
    new Todo(new Date().getTime(), 'Terminar ToolBot', new Date(), true),
    new Todo(new Date().getTime(), 'Terminar todos de home', new Date()),
  ];

  constructor(
    private _projects: ProjectsService
  ) {
    this.init();
  }

  init() {
    this._projects.getProjects().then((projects: Project[]) => {
      projects.forEach((p: Project) => {
        this.todos = this.todos.concat(p.getTodos());
      });
    });
  }

  getTodos(): Todo[] {
    return this.todos;
  }

}