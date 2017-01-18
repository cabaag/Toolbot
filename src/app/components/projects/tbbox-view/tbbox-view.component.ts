import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tbbox-view',
  templateUrl: './tbbox-view.component.html',
  styleUrls: ['./tbbox-view.component.scss']
})
export class TBBoxViewComponent implements OnInit {
  @Input() projects;

  constructor() { }

  ngOnInit() {
  }

}
