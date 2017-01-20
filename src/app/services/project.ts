export class Project {
  constructor(
    public name: string,
    public description?: string,
    public image: string = undefined,
    public star: boolean = false
  ){
  }
}
