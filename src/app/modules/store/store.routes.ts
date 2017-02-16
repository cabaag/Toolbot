import { Component, Injectable, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PackageDetailsComponent } from './components/package-details/package-details.component';
import { PackageDetailsResolver } from './services/package-details-resolve.service';
import { PackagesResolver } from './services/packages-resolver.service';
import { PackagesService } from './services/packages.service';
import { PackagesViewComponent } from './components/packages-view/packages-view.component';
import { StoreComponent } from './store.component';

const routes: Routes = [{
  path: 'store',
  component: StoreComponent,
  children: [{
    path: '',
    component: PackagesViewComponent,
    resolve: {
      packages: PackagesResolver
    }
  }, {
    path: ':id',
    component: PackageDetailsComponent,
    resolve: {
      package: PackageDetailsResolver
    }
  }]
}];

export const storeComponents: Component[] = [
  StoreComponent,
  PackagesViewComponent,
  PackageDetailsComponent
];

export const storeProviders: Injectable[] = [
  PackagesService,
  PackagesResolver,
  PackageDetailsResolver
];

export const storePipes: Injectable[] = [
];
export const storeRoutes: ModuleWithProviders = RouterModule.forChild(routes);
