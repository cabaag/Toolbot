import { projectComponents, projectPipes, projectProviders, projectRoutes } from './project.routes';

import { BrowserModule } from '@angular/platform-browser';
import { CovalentCoreModule } from '@covalent/core';
import { CreateProjectComponent } from './components/create-project/create-project.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TBBoxViewComponent } from './components/tbbox-view/tbbox-view.component';
import { TBListViewComponent } from './components/tblist-view/tblist-view.component';

@NgModule({
  declarations: [
    projectComponents,
    CreateProjectComponent,
    TBBoxViewComponent,
    TBListViewComponent,
    projectPipes
  ],
  // directives, components, and pipes owned by this NgModule
  imports: [
    BrowserModule,
    RouterModule,
    CovalentCoreModule.forRoot(),
    projectRoutes
  ],
  // modules needed to run this module
  providers: [
    projectProviders
  ],
  entryComponents: [
    CreateProjectComponent
  ],
})
export class ProjectModule { }
