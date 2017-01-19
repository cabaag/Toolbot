import { Injectable } from '@angular/core';

@Injectable()
export class IssuesService {
  issues: Object[] = [{
    project: 'ToolBot',
    title: 'Bug al abrir la app',
    description: 'Al abrir la app se cierra automaticamente',
    source: 'Github'
  }, {
    project: 'FlexboxLayout',
    title: 'Imagenes del dashboard',
    description: 'Tarda mucho tiempo en cargar las imagenes',
    source: 'Gitlab'
  }];

  constructor() { }

  getIssues() {
    return this.issues;
  }
}
