import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements AfterViewInit {
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
  constructor() {}

  ngAfterViewInit(): void {
    // do Something
  }
}