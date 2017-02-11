import { Component, Injectable, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetailsProjectComponent } from './components/details-project/details-project.component';
import { FilterProjectsPipe } from './pipes/filter-projects.pipe';
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
    component: DetailsProjectComponent
  }]
}];

export const projectComponents: Component[] = [
  ProjectsComponent,
  ViewProjectsComponent,
  DetailsProjectComponent
];

export const projectProviders: Injectable[] = [
  ProjectsService,
  TodosService
];

export const projectPipes: Injectable[] = [
  FilterProjectsPipe,
  SortProjectsPipe
];
export const projectRoutes: ModuleWithProviders = RouterModule.forChild(routes);