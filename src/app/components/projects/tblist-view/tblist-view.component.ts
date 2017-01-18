import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tblist-view',
  templateUrl: './tblist-view.component.html',
  styleUrls: ['./tblist-view.component.scss']
})
export class TBListViewComponent implements OnInit {
  @Input() projects;

  constructor() { }

  ngOnInit() {
  }

}
