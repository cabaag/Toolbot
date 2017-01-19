import { AfterViewInit, Component } from '@angular/core';

import { IssuesService } from './../../services/issues.service';
import { ResourcesService } from './../../services/resources.service';
import { Todo } from './../../services/todo';
import { TodosService } from './../../services/todos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements AfterViewInit {
  projects: Object[] = [{
    image: undefined,
    name: 'FlexboxLayout',
    description: 'Super flexbox layout'
  }, {
    image: undefined,
    name: 'ToolBot',
    description: 'Set of tools for help developers to manage, update, upgrade their projects and find help.'
  }, {
    image: undefined,
    name: 'ToolBot',
    description: 'Set of tools for help developers to manage, update, upgrade their projects and find help.'
  }];


  todos: Todo[];
  issues: Object[];
  resources: Object[];

  constructor(
    private _todos: TodosService,
    private _issues: IssuesService,
    private _resources: ResourcesService
  ) {
    this.todos = _todos.getTodos();
    this.issues = _issues.getIssues();
    this.resources = _resources.getResources();
  }

  ngAfterViewInit(): void {
    // do Something
  }
}
