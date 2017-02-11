import { Component, OnInit } from '@angular/core';

import { Todo } from './../../classes/todo';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.scss']
})
export class EditTodoComponent implements OnInit {
  todo: Todo;
  constructor() { }

  ngOnInit() {
  }

  saveTodo() {

  }

}
