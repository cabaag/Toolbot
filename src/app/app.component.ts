import { Component, ViewContainerRef } from '@angular/core';

import { DomSanitizer } from '@angular/platform-browser';
import { MdIconRegistry } from '@angular/material';

@Component({
  selector: 'app-toolbot',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  appName: 'ToolBot';
  isotipe: 'app/assets/ico/favico.ico';

  routes: Object[] = [{
    icon: 'home',
    route: '.',
    title: 'Home',
  }, {
    icon: 'code',
    route: '/projects',
    title: 'Projects',
  }, {
    icon: 'git',
    route: '/git',
    title: 'Git',
  }, {
    icon: 'store',
    route: '/store',
    title: 'Store',
  }, {
    icon: 'settings',
    route: '/settings',
    title: 'Settings',
  }];

  constructor(private _iconRegistry: MdIconRegistry,
    private _domSanitizer: DomSanitizer,
    viewContainerRef: ViewContainerRef) {
    this._iconRegistry.addSvgIconInNamespace('assets', 'toolbot',
      this._domSanitizer.bypassSecurityTrustResourceUrl('app/assets/icons/github.svg'));
  }

}
