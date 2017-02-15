import { RouterModule, Routes } from '@angular/router';

import { CookieService } from 'angular2-cookie/services/cookies.service';
import { HomeComponent } from './components/home/home.component';
import { IssuesService } from './services/issues.service';
import { ResourcesService } from './services/resources.service';
import { StoreComponent } from './modules/store/store.component';

const routes: Routes = [{
    path: '',
    component: HomeComponent,
  },
  // {
  //   component: GitComponent,
  //   path: 'git',
  {
    path: 'store',
    component: StoreComponent,
  }
];

export const appRoutingProviders: any[] = [
  IssuesService,
  ResourcesService,
  // Third party services
  CookieService
];

export const appPipes: any[] = [
];
export const appRoutes: any = RouterModule.forRoot(routes);
// export const appRoutes: any = RouterModule.forRoot(routes, { useHash: true });
