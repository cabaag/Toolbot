import { Component, OnInit } from '@angular/core';

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
    private _projects: ProjectsService
  ) {
    this.projects = _projects.getProjects();
  }

  ngOnInit() {
  }

  changeView(view: string): void {
    this.listView = view === 'list';
  }
}
