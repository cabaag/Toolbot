/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TBBoxViewComponent } from './tbbox-view.component';

describe('TBBoxViewComponent', () => {
  let component: TBBoxViewComponent;
  let fixture: ComponentFixture<TBBoxViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TBBoxViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TBBoxViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
