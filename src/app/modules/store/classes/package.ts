export class Package {
  public description: string;
  public repo: string;
  public keywords: [string];
  public version: number;
  public stars: number;
  public downloaded: number;

  constructor(
    public id: number,
    public name: string,
    public owner: number,
  ) { }

}
