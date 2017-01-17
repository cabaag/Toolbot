import { appRoutes, appRoutingProviders } from './app.routes';

import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { CovalentChartsModule } from '@covalent/charts';
import { CovalentCoreModule } from '@covalent/core';
import { CovalentFileSelectModule } from '../platform/file-select';
import { CovalentHighlightModule } from '@covalent/highlight';
import { CovalentHttpModule } from '@covalent/http';
import { CovalentMarkdownModule } from '@covalent/markdown';
import { CovalentMonacoEditorModule } from '../platform/monaco-editor';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ], // directives, components, and pipes owned by this NgModule
  imports: [
    BrowserModule,
    CovalentCoreModule.forRoot(),
    CovalentHttpModule.forRoot(),
    CovalentHighlightModule.forRoot(),
    CovalentMarkdownModule.forRoot(),
    CovalentChartsModule.forRoot(),
    CovalentMarkdownModule.forRoot(),
    CovalentMonacoEditorModule.forRoot(),
    CovalentFileSelectModule.forRoot(),
    appRoutes,
  ], // modules needed to run this module
  providers: [
    appRoutingProviders,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
