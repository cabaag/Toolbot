import { Component, OnInit } from '@angular/core';

import { CookieService } from 'angular2-cookie/services/cookies.service';
import { Project } from './../../services/project';
import { ProjectsService } from './../../services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  listView: boolean = true;
  projects: Project[];
  constructor(
    private _projects: ProjectsService,
    private _cookieService:CookieService
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
}
