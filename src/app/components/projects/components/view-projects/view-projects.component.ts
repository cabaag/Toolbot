import { Component } from '@angular/core';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { CreateProjectComponent } from './../create-project/create-project.component';
import { FilterProjectsPipe } from './../../pipes/filter-projects.pipe';
import { MdDialog } from '@angular/material';
import { Project } from './../../classes/project';
import { ProjectsService } from './../../services/projects.service';
import { Router } from '@angular/router';
import { SortProjectsPipe } from './../../pipes/sort-projects.pipe';
import { Subscription } from 'rxjs/Subscription';
import { element } from 'protractor';

if (electron) {
  const dialog = electron.remote.dialog;
}

enum sorting { DEFAULT, NAME };

@Component({
  selector: 'app-view-projects',
  templateUrl: './view-projects.component.html',
  styleUrls: ['./view-projects.component.scss'],
})
export class ViewProjectsComponent {
  listViewActive: boolean = true;
  subscriptionProjects: Subscription;
  projects: Project[];
  private sortBy: number = sorting.DEFAULT;

  constructor(
    private _projects: ProjectsService,
    private _cookieService: CookieService,
    private _dialog: MdDialog,
    private _router: Router
  ) {
    this._projects.getProjects()
      .then((projects: Project[]) => {
        this.projects = projects;
      });
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
  private getViewPreferences(): boolean {
    const view = this._cookieService.get('activeView');
    return view === 'list';
  }

  /**
   * Create and open a dialog wizard for create a custom
   * or template project.
   */
  openCreateProjectDialog(): void {
    this._dialog.open(CreateProjectComponent, {
      width: '450px',
      height: '630px',
    });
  }

  /**
   * Go to selected project if click comes from
   * anywhere on card except for buttons and then
   * goes to details of project
   */
  goToProject(event, id: number) {
    event.preventDefault();
    const target: HTMLElement = event.target;
    if (target.classList.contains('md-ripple-background')) {
      return;
    }
    this._router.navigate(['/projects', id]);
  }

  /**
   * Marks a projects as favourite, this triggers reorder 
   * in view
   */
  toogleFav(project: Project): void {
    project.star = !project.star;
  }

}
