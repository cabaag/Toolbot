import { Component, Inject, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { PriorityTodo, Todo } from './../../classes/todo';

import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { Project } from './../../classes/project';
import { ProjectsService } from './../../services/projects.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EditTodoComponent implements OnInit {
  project: Project;
  todo: Todo;
  todoTmp = { name: '' };

  priorities: any[] = [{
    value: PriorityTodo.NotUrgent,
    color: 'not-urgent',
    name: 'Not urgent'
  }, {
    value: PriorityTodo.Normal,
    color: 'normal',
    name: 'Normal'
  }, {
    value: PriorityTodo.Urgent,
    color: 'urgent',
    name: 'Urgent'
  }];

  constructor(
    private _route: ActivatedRoute,
    private _projects: ProjectsService,
    private _cookie: CookieService
  ) {
    this.project = this._projects.getProject(+this._cookie.get('editingProject'));
    const idTodo = +this._cookie.get('editingTodo');
    if (idTodo) {
      this.todo = this.project.getTodo(idTodo);
    } else {
      this.todo = new Todo();
    }
    this._cookie.remove('editingProject');
    this._cookie.remove('editingTodo');
  }

  ngOnInit() {
  }

  saveTodo() {
    if (this.todo.id === undefined) {
      this.project.saveTodo(new Todo(
        new Date().getTime(),
        this.todo.name,
        this.todo.deadline || new Date(),
        this.todo.description || '',
        false,
        this.todo.priority
      ));
    } 
    // else {
    //   this.project.updateTodo(new Todo(
    //     this.todo.id,
    //     this.todo.name,
    //     this.todo.deadline,
    //     false,
    //     this.todo.priority
    //   ));
    // }
  }

}
