import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-layout-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input() form: object;

  constructor() { }

  ngOnInit() {
  }

}
