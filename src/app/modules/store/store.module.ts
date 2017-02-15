import { storeComponents, storePipes, storeProviders, storeRoutes } from './store.routes';

import { BrowserModule } from '@angular/platform-browser';
import { CovalentCoreModule } from '@covalent/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    storeComponents,
    storePipes,
  ],
  // directives, components, and pipes owned by this NgModule
  imports: [
    BrowserModule,
    RouterModule,
    CovalentCoreModule.forRoot(),
    storeRoutes
  ],
  // modules needed to run this module
  providers: [
    storeProviders
  ],
  entryComponents: [
  ],
})
export class StoreModule { }
