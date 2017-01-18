import { appRoutes, appRoutingProviders } from './app.routes';

import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { CovalentCoreModule } from '@covalent/core';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { ProjectsComponent } from './components/projects/projects.component';
import { TBListViewComponent } from './components/projects/tblist-view/tblist-view.component';
import { TBBoxViewComponent } from './components/projects/tbbox-view/tbbox-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectsComponent,
    TBListViewComponent,
    TBBoxViewComponent,
  ], // directives, components, and pipes owned by this NgModule
  imports: [
    BrowserModule,
    CovalentCoreModule.forRoot(),
    appRoutes,
  ], // modules needed to run this module
  providers: [
    appRoutingProviders,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
