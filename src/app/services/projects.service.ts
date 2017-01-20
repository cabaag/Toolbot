import { Injectable } from '@angular/core';
import { Project } from './project';

@Injectable()
export class ProjectsService {
  projects: Project[] = [
    new Project('FlexboxLayout', 'Super flexbox layout', undefined, true),
    new Project('ToolBot', 'Set of tools for help developers to manage, update, upgrade their projects and find help.'),
    new Project('ToolBot', 'Set of tools for help developers to manage, update, upgrade their projects and find help.'),
  ];
  constructor() { }

  getProjects () {
    return this.projects;
  }

}
