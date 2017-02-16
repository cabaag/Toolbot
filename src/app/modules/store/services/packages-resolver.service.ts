import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Package } from './../classes/package';
import { PackagesService } from './packages.service';
import { Resolve } from '@angular/router';

@Injectable()
export class PackagesResolver implements Resolve<[Package]> {

  constructor(
    private _packages: PackagesService
  ) { }

  resolve(): Observable<[Package]> | Promise<[Package]> | [Package] {
    return this._packages.getPackages();
  }

}
