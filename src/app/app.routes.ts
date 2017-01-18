import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';

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

];

export const appRoutes: any = RouterModule.forRoot(routes, { useHash: true });
