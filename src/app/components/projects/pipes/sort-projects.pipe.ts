import { Pipe, PipeTransform } from '@angular/core';

import { Project } from './../project';

/**
 * Pipe que ordena los proyectos dependiendo el parametro que 
 * se le pase, puede ordenar por:
 * - Defecto (pone los favoritos primero)
 * - Alfabeticamente
 * - Fecha de creación
 * - Fecha de último cambio
 */
@Pipe({
  name: 'sortProjects'
})
export class SortProjectsPipe implements PipeTransform {

  sortByFavourite(projects: Project[]): Project[] {
    return projects.sort((a: Project, b: Project) => {
      if (a.star === b.star) {
        return 0;
      } else if (a.star === true) {
        return -1;
      } else if (b.star === true) {
        return 1;
      }
    });
  }

  transform(projects: Project[], sortBy: string): Project[] {
    projects = this.sortByFavourite(projects);
    return projects;
  }

}
