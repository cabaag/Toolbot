import { Injectable } from '@angular/core';
import { Project } from './../project';

@Injectable()
export class ProjectsService {
  base: string;
  projects: Project[] = [];
  stream: Promise<Array<Project>>;
  if(electron) {
    this.base = electron.remote.app.getAppPath() + '/../data';
  }

  constructor() {
    this.stream = this.readProjects();
  }

  /**
   * Returns a promise that contains all projects.
   * @returns Promise container of projects.
   */
  getProjects(): Promise<Array<Project>> {
    return this.stream;
  }

  /**
   * Returns a promise with the project required 
   * by id.
   * @returns Promise with the project.
   */
  getProject(id: number) {
    return this.projects.filter(p => {
      return p.id === id;
    })[0];
  }

  /**
   * Reads all projects as string from a file
   * and then turns it into json to 
   * @returns Promise container of projects.
   */
  private readProjects(): Promise<Array<Project>> {
    return new Promise(resolve => {
      if (electron) {
        jetpack.readAsync(`${this.base}/projects.json`, {
          utf8: false,
          json: true,
          jsonWithDates: true
        }).then(projects => {
          projects = JSON.parse(projects);
          projects.forEach(p => {
            this.projects.push(new Project(p));
          });
          resolve(this.projects);
        });
      } else {
        resolve(this.projects);
      }
    });
  }

  /**
   * Receives a project and attach it to actual 
   * projects then write it to a file.
   * @param project. The project to create and save
   */
  createProject(project: Project) {
    this.projects.push(project);
    jetpack.write(`${this.base}/projects.json`, this.projects, {
      atomic: true,
      jsonIndent: 2
    });
  }

  /**
   * Deletes the project of the provided ID and writes 
   * changes in file of projects
   * @param id The project to delete
   */
  deleteProject(id: number): boolean {
    let p = this.getProject(id);
    const index = this.projects.indexOf(p);
    if (index > -1) {
      this.projects.splice(index, 1);
      jetpack.write(`${this.base}/projects.json`, this.projects, {
        atomic: true,
        jsonIndent: 2
      });
      return true;
    }
    return false;
  }

}
