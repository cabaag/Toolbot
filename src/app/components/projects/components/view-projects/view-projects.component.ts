import { Component, OnInit } from '@angular/core';

import { CookieService } from 'angular2-cookie/services/cookies.service';
import { CreateProjectComponent } from './../create-project/create-project.component';
import { MdDialog } from '@angular/material';
import { Project } from './../../project';
import { ProjectsService } from './../../services/projects.service';

if (electron) {
  const dialog = electron.remote.dialog;
}


@Component({
  selector: 'app-view-projects',
  templateUrl: './view-projects.component.html',
  styleUrls: ['./view-projects.component.scss']
})
export class ViewProjectsComponent implements OnInit {
  listView: boolean = true;
  projects: Project[];
  showWindowCreateProject: boolean = false;
  private currentPath: string = process.cwd();

  constructor(
    private _projects: ProjectsService,
    private _cookieService: CookieService,
    private _dialog: MdDialog
  ) {
    this.projects = _projects.getProjects();
  }

  ngOnInit() {
    this.listView = this.getViewPreferences();
  }

  changeView(view: string): void {
    this.listView = view === 'list';
    this._cookieService.put('typeViewProjects', this.listView + '');
  }

  /*
  *  Get prefererences of the view of projects
  */
  getViewPreferences(): boolean {
    return this._cookieService.get('typeViewProjects') === 'true';
  }

  openCreateProjectDialog() {
    this._dialog.open(CreateProjectComponent, {
      width: '450px', // can be px or %
      height: '630px', // can be px or %
    });
  }

}
