import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { IssuesService } from './services/issues.service';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectsService } from './services/projects.service';
import { ResourcesService } from './services/resources.service';
import { TodosService } from './services/todos.service';

const routes: Routes = [{
    component: HomeComponent,
    path: '',
  }, {
    component: ProjectsComponent,
    path: 'projects',
  },
  // {
  //   component: GitComponent,
  //   path: 'git',
  // }, {
  //   component: StoreComponent,
  //   path: 'store',
  // }
];

export const appRoutingProviders: any[] = [
  TodosService,
  IssuesService,
  ResourcesService,
  ProjectsService
];

export const appRoutes: any = RouterModule.forRoot(routes, { useHash: true });
