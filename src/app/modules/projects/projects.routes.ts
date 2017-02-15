import { Component, Injectable, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FilterProjectsPipe } from './pipes/filter-projects.pipe';
import { ProjectCreateComponent } from './components/project-create/project-create.component';
import { ProjectDetailResolve } from './services/project-detail-resolve.service';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { ProjectsComponent } from './projects.component';
import { ProjectsService } from './services/projects.service';
import { ProjectsViewComponent } from './components/projects-view/projects-view.component';
import { SortProjectsPipe } from './pipes/sort-projects.pipe';
import { TodoEditComponent } from './components/todo-edit/todo-edit.component';
import { TodosService } from './services/todos.service';

const routes: Routes = [{
  path: 'projects',
  component: ProjectsComponent,
  children: [{
    path: '',
    component: ProjectsViewComponent
  }, {
    path: ':id',
    component: ProjectDetailsComponent,
    resolve: {
      project: ProjectDetailResolve
    }
  }]
}];

export const projectComponents: Component[] = [
  ProjectsComponent,
  ProjectsViewComponent,
  ProjectDetailsComponent,
  ProjectCreateComponent,
  TodoEditComponent,
];

export const projectProviders: Injectable[] = [
  ProjectsService,
  TodosService,
  ProjectDetailResolve
];

export const projectPipes: Injectable[] = [
  FilterProjectsPipe,
  SortProjectsPipe
];
export const projectRoutes: ModuleWithProviders = RouterModule.forChild(routes);