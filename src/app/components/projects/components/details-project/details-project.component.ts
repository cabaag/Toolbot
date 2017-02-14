import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';

import { CookieService } from 'angular2-cookie/services/cookies.service';
import { EditTodoComponent } from './../edit-todo/edit-todo.component';
import { Location } from '@angular/common';
import { MdDialog } from '@angular/material';
import { Project } from './../../classes/project';
import { ProjectsService } from './../../services/projects.service';
import { Subscription } from 'rxjs/Subscription';
import { TdDialogService } from '@covalent/core';
import { Todo } from './../../classes/todo';
import { TodosService } from './../../services/todos.service';
import { ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-details-project',
  templateUrl: './details-project.component.html',
  styleUrls: ['./details-project.component.scss']
})
export class DetailsProjectComponent implements OnInit, OnDestroy {
  sub: Subscription;
  project: Project;

  constructor(
    private _route: ActivatedRoute,
    private _dialogService: TdDialogService,
    private _viewContainerRef: ViewContainerRef,
    private _location: Location,
    private _router: Router,
    private _dialog: MdDialog,
    private _cookie: CookieService,

    // Own services
    private _projects: ProjectsService,
    private _todos: TodosService
  ) {
  }

  ngOnInit() {
    this.sub = this._route.data.subscribe((data: { project: Project }) => this.project = data.project);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  /**
   * Gooes back into history stack
   */
  back() {
    this._location.back();
  }

  /**
   * Delete de current project and go back to general view of projects
   */
  deleteProject(): void {
    this._dialogService.openPrompt({
      message: 'Write the name of the project to delete it.',
      disableClose: true,
      viewContainerRef: this._viewContainerRef,
      title: 'Delete project ' + this.project.name,
      cancelButton: 'Cancel',
      acceptButton: 'Delete',
    }).afterClosed().subscribe((name: string) => {
      if (name && name === this.project.name) {
        if (this._projects.deleteProject(this.project.id)) {
          this._router.navigate(['/projects']);
        }
      }
    });
  }

  todosPending(): number {
    return this.project.todos.filter((todo: Todo)=> {
      return !todo.finished;
    }).length;
  }

  /**
   * Creates a dialog for edit or create a todo task
   */
  editTodo(todo: Todo): void {
    this._todos.setEditingTodo(this.project, todo || null);
    this._dialog.open(EditTodoComponent, {
      width: '450px',
      height: '450px',
    });
  }

}
