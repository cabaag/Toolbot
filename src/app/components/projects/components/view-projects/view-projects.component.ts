import { Component } from '@angular/core';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { CreateProjectComponent } from './../create-project/create-project.component';
import { MdDialog } from '@angular/material';
import { Project } from './../../project';
import { ProjectsService } from './../../services/projects.service';
import { Subscription } from 'rxjs/Subscription';

if (electron) {
  const dialog = electron.remote.dialog;
}


@Component({
  selector: 'app-view-projects',
  templateUrl: './view-projects.component.html',
  styleUrls: ['./view-projects.component.scss']
})
export class ViewProjectsComponent {
  listViewActive: boolean = true;
  subscriptionProjects: Subscription;
  projects: Project[];

  constructor(
    private _projects: ProjectsService,
    private _cookieService: CookieService,
    private _dialog: MdDialog
  ) {
    this._projects.getProjects()
      .then((projects: Project[]) => {
        this.projects = projects;
      });
    // this.projects = _projects.getProjects();
    this.listViewActive = this.getViewPreferences();
  }

  /**
   * Change the view of how the projects are visualized.
   * @param view. The way that projects will be viewed.
   */
  changeView(view: string): void {
    this.listViewActive = view === 'list';
    this._cookieService.put('activeView', view);
  }

  /**
   * Get prefererences of the view for component.
   * @returns If projects will be view as list or boxes.
   */
  getViewPreferences(): boolean {
    return this._cookieService.get('activeView') === 'list';
  }

  openCreateProjectDialog() {
    this._dialog.open(CreateProjectComponent, {
      width: '450px', // can be px or %
      height: '630px', // can be px or %
    });
  }

}
