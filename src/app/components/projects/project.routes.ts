import { Component, Injectable, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetailsProjectComponent } from './components/details-project/details-project.component';
import { FilterProjectsPipe } from './pipes/filter-projects.pipe';
import { ProjectsComponent } from './projects.component';
import { ProjectsService } from './services/projects.service';
import { ViewProjectsComponent } from './components/view-projects/view-projects.component';

const routes: Routes = [{
    path: 'projects',
    component: ProjectsComponent,
    children: [{
      path: '',
      component: ViewProjectsComponent
    }]
  }, {
    path: 'projects/:id',
    component: DetailsProjectComponent
  }
];

export const projectComponents: Component[] = [
  ProjectsComponent,
  ViewProjectsComponent,
  DetailsProjectComponent
];

export const projectProviders: Injectable[] = [
  ProjectsService
];

export const projectPipes: Injectable[] = [
  FilterProjectsPipe
];
export const projectRoutes: ModuleWithProviders = RouterModule.forChild(routes);