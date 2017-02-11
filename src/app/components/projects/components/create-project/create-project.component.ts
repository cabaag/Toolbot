import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Project } from './../../classes/project';
import { ProjectsService } from './../../services/projects.service';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss']
})
export class CreateProjectComponent implements OnInit {
  private electronEnabled: boolean = electron ? true : false;
  project: { path: string, image: string, name: string, description: string };
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
