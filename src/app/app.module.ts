import { appPipes, appRoutes, appRoutingProviders } from './app.routes';

import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { CovalentCoreModule } from '@covalent/core';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { ProjectModule } from './components/projects/project.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    appPipes,
  ], // directives, components, and pipes owned by this NgModule
  imports: [
    BrowserModule,
    CovalentCoreModule.forRoot(),
    ProjectModule,
    appRoutes,
  ], // modules needed to run this module
  providers: [
    appRoutingProviders,
  ],
  entryComponents: [
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
