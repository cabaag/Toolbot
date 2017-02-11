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
  name: 'sortProjects',
  pure: false
})
export class SortProjectsPipe implements PipeTransform {

  /**
   * Sort projects by favourite and the by id
   */
  sortByFavourite(projects: Project[]): Project[] {
    return projects.sort((a: Project, b: Project) => {
      // If projects are favourites then sort them by name
      if (a.star === b.star) {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      }
      if (a.star === true) return -1;
      if (b.star === true) return 1;
    });
  }

  sortByName(projects: Project[]): Project[] {
    return projects.sort((a: Project, b: Project) => {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });
  }

  transform(projects: Project[], sortBy: string): Project[] {
    projects = this.sortByFavourite(projects);
    return projects;
  }

}
