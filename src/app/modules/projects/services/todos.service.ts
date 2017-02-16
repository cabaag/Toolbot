import { Injectable } from '@angular/core';
import { Project } from './../classes/project';
import { ProjectsService } from './projects.service';
import { Todo } from './../classes/todo';

@Injectable()
export class TodosService {
  todos: Todo[] = [
    new Todo(new Date().getTime(), 'Terminar ToolBot', new Date(), '', true),
    new Todo(new Date().getTime(), 'Terminar todos de home', new Date()),
  ];
  editingTodo: Todo;
  editingProject: Project;

  constructor(
    private _projects: ProjectsService
  ) {
    this.init();
  }

  init() {
    this._projects.getProjects().then((projects: Project[]) => {
      projects.forEach((p: Project) => {
        this.todos = this.todos.concat(p.todos);
      });
    });
  }

  getTodos(): Todo[] {
    return this.todos;
  }

  setEditingTodo(project: Project, todo: Todo) {
    this.editingTodo = todo;
    this.editingProject = project;

  }

}
