import { Component, Injectable, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetailsProjectComponent } from './components/details-project/details-project.component';
import { FilterProjectsPipe } from './pipes/filter-projects.pipe';
import { ProjectDetailResolve } from './services/project-detail-resolve.service';
import { ProjectsComponent } from './projects.component';
import { ProjectsService } from './services/projects.service';
import { SortProjectsPipe } from './pipes/sort-projects.pipe';
import { TodosService } from './services/todos.service';
import { ViewProjectsComponent } from './components/view-projects/view-projects.component';

const routes: Routes = [{
  path: 'projects',
  component: ProjectsComponent,
  children: [{
    path: '',
    component: ViewProjectsComponent
  }, {
    path: ':id',
    component: DetailsProjectComponent,
    resolve: {
      project: ProjectDetailResolve
    }
  }]
}];

export const projectComponents: Component[] = [
  ProjectsComponent,
  ViewProjectsComponent,
  DetailsProjectComponent
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