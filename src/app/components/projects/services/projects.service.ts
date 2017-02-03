import { Injectable } from '@angular/core';
import { Project } from '../project';

@Injectable()
export class ProjectsService {
  base: string = electron.remote.app.getAppPath() + '/../data';
  projects: Project[] = [];

  constructor() {
    this.readProjects();
  }

  getProjects() {
    return this.projects;
  }

  getProject(id: number) {
    return this.projects.filter(p => {
      return p.id === id;
    })[0];
  }

  readProjects() {
    jetpack.readAsync(`${this.base}/projects.json`, {
      utf8: false,
      json: true,
      jsonWithDates: true
    }).then(data => {
      data = JSON.parse(data);
      data.forEach(p => {
        this.projects.push(new Project(p));
      });
    });
  }

  createProject(project: Project) {
    this.projects.push(project);
    jetpack.write(`${this.base}/projects.json`, this.projects, {
      atomic: true,
      jsonIndent: 2
    });
  }

}
