import { Component } from '@angular/core';
import { IssuesService } from './../../services/issues.service';
import { Project } from './../projects/classes/project';
import { ProjectsService } from './../projects/services/projects.service';
import { ResourcesService } from './../../services/resources.service';
import { Subscription } from 'rxjs/Subscription';
import { Todo } from './../projects/classes/todo';
import { TodosService } from './../projects/services/todos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent{
  projects: Project[];
  todos: Todo[];
  issues: Object[];
  resources: Object[];

  constructor(
    private _todos: TodosService,
    private _issues: IssuesService,
    private _resources: ResourcesService,
    private _projects: ProjectsService
  ) {
    this._projects.getProjects()
      .then((projects: Project[]) => {
        this.projects = projects;
      });
    // this.projects = _projects.getProjects();
    this.todos = _todos.getTodos();
    this.issues = _issues.getIssues();
    this.resources = _resources.getResources();
  }
}
