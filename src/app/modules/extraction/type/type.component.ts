import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.scss']
})
export class TypeComponent implements OnInit {


  form = {
    label:'Pre Definition Extraction',
    icon:'fa-list',
    items:[
      {
        type:'row', items:[
          {type:'text',label:'Pre Definition Name', placeholder:'', value:'Cranio CT MR 001'},
          {type:'text',label:'ID', placeholder:'', value:'20190830D00005', disabled:true},
        ]
      },
      {
        type:'fieldset', label:'Includes', icon:'', items:[
          {type:'text',label:'Includes words in Description', placeholder:'', value:'cranio, cabeça, brain'},
        ]
      },
      {
        type:'fieldset', label:'Excludes', icon:'', items:[
          {type:'text',label:'Excludes words in Description', placeholder:'', value:'head, femur, nome'},
        ]
      },
      


    ],
    actions:[
      // {label:'Edit', style:'btn-warning', icon:'fa-pencil-square'},
      {label:'Save', style:'btn-primary', icon:'fa-cloud-upload'},
    ]
  }

  constructor() { }

  ngOnInit() {
  }

}
