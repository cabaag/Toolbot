import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  listView: boolean = true;
  projects = [{
    image: undefined,
    name: 'FlexboxLayout',
    description: 'Super flexbox layout'
  }, {
    image: undefined,
    name: 'ToolBot',
    description: 'Set of tools for help developers to manage, update, upgrade their projects and find help.'
  }, {
    image: undefined,
    name: 'ToolBot',
    description: 'Set of tools for help developers to manage, update, upgrade their projects and find help.'
  }];
  constructor() { }

  ngOnInit() {
  }

  changeView(view: string): void {
    this.listView = view === 'list';
  }
}
