import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.scss']
})
export class TypeComponent implements OnInit {


  form = {
    label:'Pre Definition Anonymization',
    icon:'fa-list',
    items:[
      {
        type:'fieldset', label:'Pre definition groups', icon:'', items:[
          {type:'list',label:'Selected', options:[
            {label:'AN_PSI_001', value:'1', selected:true},
            {label:'AN_RX_CRANIO_CCDS', value:'1', selected:false},
            {label:'AN_MR_RX_JOAO_MAMA_STRAUS', value:'1', selected:false},

          ]},
          {type:'button',label:'Add New', icon:'plus-circle', style:'btn-primary'},
        ]
      },
      {
        type:'row', items:[
          {type:'text',label:'Code', placeholder:'', value:'AN_PSI_001'},
          {type:'checkbox',label:'Option', options:[
            {label:'Generate Random Hash', checked:true},
            {label:'Save Hash in DB', checked:true},
          ]},
          {type:'checkbox',label:'Level Anonymization', options:[
            {label:'STUDY', checked:true},
            {label:'SERIE', checked:true},
            {label:'INSTANCE', checked:true},
          ]},
        ]
      },
      {
        type:'fieldset', label:'Tags for Anonymization', icon:'', items:[
          {type:'list',label:'Include', multiple:true, options:[
            {label:'(0002,0012)	UI	Implementation Class UID	', value:'1', selected:true},
            {label:'(0002,0013)	SH	Implementation Version Name	', value:'1', selected:true},
            {label:'(0002,0016)	AE	Source Application Entity Title	', value:'1', selected:true},
            {label:'(0002,0017)	AE	Sending Application Entity Title	', value:'1', selected:true},
            {label:'(0002,0018)	AE	Receiving Application Entity Title	', value:'1', selected:true},
            {label:'(0002,0100)	UI	Private Information Creator UID	', value:'1', selected:true},
            {label:'(0002,0102)	OB	Private Information', value:'1', selected:true},

          ]},
          {type:'list',label:'Exclude', multiple:true, options:[
            {label:'(0002,0012)	UI	Implementation Class UID	', value:'1', selected:true},
            {label:'(0002,0013)	SH	Implementation Version Name	', value:'1', selected:true},
            {label:'(0002,0016)	AE	Source Application Entity Title	', value:'1', selected:true},
            {label:'(0002,0017)	AE	Sending Application Entity Title	', value:'1', selected:true},
            {label:'(0002,0018)	AE	Receiving Application Entity Title	', value:'1', selected:true},
            {label:'(0002,0100)	UI	Private Information Creator UID	', value:'1', selected:true},
            {label:'(0002,0102)	OB	Private Information', value:'1', selected:true},

          ]},
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
