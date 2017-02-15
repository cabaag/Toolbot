import { projectComponents, projectPipes, projectProviders, projectRoutes } from './projects.routes';

import { BrowserModule } from '@angular/platform-browser';
import { CovalentCoreModule } from '@covalent/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { ProjectCreateComponent } from './components/project-create/project-create.component';
import { RouterModule } from '@angular/router';
import { TodoEditComponent } from './components/todo-edit/todo-edit.component';

@NgModule({
  declarations: [
    projectComponents,
    projectPipes,
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
    ProjectCreateComponent,
    TodoEditComponent
  ],
})
export class ProjectModule { }
