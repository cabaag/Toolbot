import { RouterModule, Routes } from '@angular/router';

import { CookieService } from 'angular2-cookie/services/cookies.service';
import { HomeComponent } from './components/home/home.component';
import { IssuesService } from './services/issues.service';
import { ProjectsComponent } from './components/projects/projects.component';
import { ResourcesService } from './services/resources.service';
import { TodosService } from './services/todos.service';

const routes: Routes = [{
    component: HomeComponent,
    path: '',
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
  // Third party services
  CookieService
];

export const appPipes: any[] = [
];
export const appRoutes: any = RouterModule.forRoot(routes, { useHash: true });
