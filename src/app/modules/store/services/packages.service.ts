import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Package } from './../classes/package';
import { packages } from './packages.mocks';

@Injectable()
export class PackagesService {
  packages: [Package];
  constructor() {
    this.packages = packages;
  }

  getPackages(): Observable<[Package]> | Promise<[Package]> | [Package] {
    return this.packages;
  }

  getPackage(id: number): Observable<Package> | Promise<Package> | Package{
    return this.packages.filter((p: Package) => {
      return p.id === id;
    })[0];
  }

}
