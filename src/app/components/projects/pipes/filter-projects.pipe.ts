import { Pipe, PipeTransform } from '@angular/core';

import { Project } from './../project';

@Pipe({
  name: 'filterProjects'
})
export class FilterProjectsPipe implements PipeTransform {

  /*
  * Search a keyword in all kewoyds of a project and 
  * return true or false
  *
  */
  searchInKeywords(keywords: string[], keyword: string): boolean {
    keywords.forEach(key => {
      if (key.toLowerCase().includes(keyword.toLowerCase())) {
        return true;
      }
    });
    return false;
  }

  transform(projects: Project[], keys: string): Project[] {
    if (keys !== undefined && keys !== '') {
      let matched: Project[] = [];
      const keywords: string[] = keys.split(' ');
      projects.forEach(function (project: Project) {
        keywords.forEach(keyword => {
          if (project.name.toLowerCase().includes(keyword.toLowerCase())) {
            matched.push(project);
          } else if (this.searchInKeywords(project.keywords, keyword)) {
            matched.push(project);
          }
        }, this);
      }, this);
      return matched;
    }
    return projects;
  }

}
