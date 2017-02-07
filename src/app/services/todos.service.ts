import { Injectable } from '@angular/core';
import { Project } from './../components/projects/project';
import { ProjectsService } from './../components/projects/services/projects.service';
import { Todo } from './todo';

@Injectable()
export class TodosService {
  todos: Todo[] = [
    new Todo(new Date().getTime(), 'Terminar ToolBot', new Date(), true),
    new Todo(new Date().getTime(), 'Terminar todos de home', new Date()),
  ];

  // tslint:disable-next-line:no-empty
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
