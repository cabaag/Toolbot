import { Component, OnDestroy, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { Package } from './../../classes/package';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-packages-view',
  templateUrl: './packages-view.component.html',
  styleUrls: ['./packages-view.component.scss']
})
export class PackagesViewComponent implements OnInit, OnDestroy {
  listViewActive = true;
  sub: Subscription;
  packages: [Package];

  constructor(
    private _route: ActivatedRoute,
    private _cookieService: CookieService,
  ) { }

  ngOnInit() {
    this.sub = this._route.data.subscribe((data: { packages: [Package] }) => this.packages = data.packages);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  /**
   * Change the view of how the projects are visualized.
   * @param view. The way that projects will be viewed.
   */
  changeView(view: string): void {
    this.listViewActive = view === 'list';
    this._cookieService.put('storeActiveView', view);
  }

  /**
   * Get prefererences of the view for component.
   * @returns If projects will be view as list or boxes.
   */
  private getViewPreferences(): boolean {
    const view = this._cookieService.get('storeActiveView');
    return view === 'list';
  }

}
