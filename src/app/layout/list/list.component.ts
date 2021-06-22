import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-layout-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() list: object;

  constructor() { }

  ngOnInit() {
  }
}
