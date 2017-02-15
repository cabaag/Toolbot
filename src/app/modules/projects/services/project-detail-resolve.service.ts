import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

import { Injectable } from '@angular/core';
import { Project } from './../classes/project';
import { ProjectsService } from './projects.service';

@Injectable()
export class ProjectDetailResolve implements Resolve<Project>{

  constructor(private _projects: ProjectsService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<Project> {
    return new Promise(resolve => {
      resolve(this._projects.getProject(+route.params['id']));
    });
  }
}