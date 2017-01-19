import { Injectable } from '@angular/core';

@Injectable()
export class ResourcesService {
  resources: Object[] = [{
    name: 'Angular 2',
    link: 'http://angular.io'
  }, {
    name: 'Curso de React',
    link: 'http://youtube.com'
  }, {
    name: 'Generador de gradientes',
    link: 'http://mozilla.com'
  }]
  constructor() { }

  getResources () {
    return this.resources;
  }

}
