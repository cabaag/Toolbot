import { Component, Injectable, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PackageDetailsComponent } from './components/package-details/package-details.component';
import { PackagesViewComponent } from './components/packages-view/packages-view.component';
import { StoreComponent } from './store.component';

const routes: Routes = [{
  path: 'store',
  component: StoreComponent,
  children: [{
    path: '',
    component: PackagesViewComponent
  }, {
    path: ':id',
    component: PackageDetailsComponent,
  }]
}];

export const storeComponents: Component[] = [
  StoreComponent,
  PackagesViewComponent,
  PackageDetailsComponent
];

export const storeProviders: Injectable[] = [
];

export const storePipes: Injectable[] = [
];
export const storeRoutes: ModuleWithProviders = RouterModule.forChild(routes);
