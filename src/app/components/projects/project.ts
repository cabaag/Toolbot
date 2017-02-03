interface IProject {
  id?: number;
  name?: string;
  path?: string;
  description?: string;
  image?: string;
  star?: boolean;
  keywords?: string[];
}
export class Project implements IProject {
  public id?: number;
  public name?: string;
  public path?: string;
  public description?: string;
  public image: string = undefined;
  public star = false;
  public keywords: string[] = [];

  constructor(p?: IProject) {
    this.id = p && p.id || new Date().getTime();
    this.name = p && p.name || '';
    this.path = p && p.path || '';
    this.description = p && p.description || '';
    this.image = p && p.image || undefined;
    this.star = p && p.star || false;
    this.keywords = p && p.keywords || [];
  }
}
