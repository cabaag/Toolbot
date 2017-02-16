import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Package } from './../classes/package';
import { PackagesService } from './packages.service';

@Injectable()
export class PackageDetailsResolver implements Resolve<Package> {

  constructor(
    private _packages: PackagesService
  ) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Package> | Promise<Package> | Package {
    return this._packages.getPackage(+route.params['id']);
  }

}
