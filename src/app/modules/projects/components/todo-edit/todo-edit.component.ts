import { AfterViewInit, Component, ElementRef, Inject, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { PriorityTodo, Todo } from './../../classes/todo';

import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { Project } from './../../classes/project';
import { ProjectsService } from './../../services/projects.service';
import { Subscription } from 'rxjs/Subscription';
import { TodosService } from './../../services/todos.service';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TodoEditComponent implements OnInit, AfterViewInit {
  project: Project;
  todo: Todo;
  // @ViewChild('inputTitle') private inputTitle: ElementRef;

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
    private _cookie: CookieService,

    // Own services
    private _projects: ProjectsService,
    private _todos: TodosService,
  ) {
    this.project = this._todos.editingProject;
    this.todo = this._todos.editingTodo || new Todo();
    this._cookie.remove('editingProject');
    this._cookie.remove('editingTodo');
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // let input = <HTMLInputElement> this.inputTitle.nativeElement;
    // console.log(input);
    // console.log(input.focus());
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
  }

}
