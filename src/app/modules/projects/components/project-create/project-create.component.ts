import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Project } from './../../classes/project';
import { ProjectsService } from './../../services/projects.service';

@Component({
  selector: 'app-project-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.scss']
})
export class ProjectCreateComponent implements OnInit {
  private electronEnabled: boolean = electron ? true : false;
  project: Project = new Project(new Date().getTime(), '', '', '');
  managers = [
    { name: 'Git' },
    { name: 'NPM' },
    { name: 'Bower' },
    { name: 'Yarn' },
    { name: 'Composer' }];
  constructor(
    private _projects: ProjectsService
  ) {
  }

  ngOnInit() {
  }

  selectDirectory() {
    if (electron) {
      let directory = electron.remote.dialog.showOpenDialog({
        title: 'Select project',
        defaultPath: '/home',
        properties: ['openDirectory']
      });
      directory = directory.length ? directory[0] : null;
      this.project.path = directory;
    }
  }

  selectImage() {
    if (electron) {
      let image = electron.remote.dialog.showOpenDialog({
        title: 'Select image',
        defaultPath: '/home',
        properties: ['openFile'],
        filters: [
          { name: 'png', extensions: ['png'] },
          { name: 'icon', extensions: ['ico'] },
          { name: 'jpg', extensions: ['jpg', 'jpeg'] }
        ]
      });
      image = image.length ? image[0] : null;
      this.project.image = image;
    }
  }

  createProject() {
    const projectTmp = new Project(
      new Date().getTime(),
      this.project.name,
      this.project.path,
      this.project.description,
      this.project.image,
    );
    this._projects.createProject(projectTmp);
  }

}
