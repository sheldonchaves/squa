import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent implements OnInit {


  form = {
    label:'Job Anonymization',
    icon:'fa-user-times',
    items:[
      {
        type:'row', items:[
          {type:'text',label:'Job Name', placeholder:'', value:''},
          {type:'text',label:'JobID', placeholder:'', value:'A2019083000005', disabled:true},
          {type:'list',label:'Priority Level', options:[
            {label:'Normal', value:'3'},
            {label:'Important', value:'2'},
            {label:'Critical', value:'1'},
            {label:'Low', value:'4'}
          ]},
          
        ]
      },
      {
        type:'fieldset', label:'Source (Path or ID)', icon:'', items:[
          {type:'text',label:'Path IN', placeholder:'', value:'//extraction/20190830D00005'},
          {type:'list',label:'Extraction Query', options:[
            {label:'20190830D00005', value:'1'},
            {label:'20190830D00022', value:'2'},
            {label:'20190830D00199', value:'3'},
            {label:'20190829D09877', value:'1'},
            {label:'20190811D03232', value:'2'},
            {label:'20190812D00011', value:'3'},
            {label:'20190812D00033', value:'1'},
            {label:'20190831D00111', value:'2'},
            {label:'20190830D00009', value:'3'},
          ]},
        ]
      },
      {
        type:'fieldset', label:'Destination', icon:'', items:[
          {type:'text',label:'Path OUT', placeholder:'', value:'//anonymization/A2019083000005'},
        ]
      },
      {
        type:'row', items:[
          {type:'list',label:'Pre Definition Anonymization', options:[
            {label:'AN_PSI_001', value:'1'},
            {label:'AN_P_002', value:'2'},
            {label:'AN_S_003', value:'3'},
          ]},
          {type:'checkbox',label:'Level Anonymization', options:[
            {label:'STUDY', checked:true},
            {label:'SERIE', checked:false},
            {label:'INSTANCE', checked:false},
          ]},
          {type:'list',label:'Custom tags Anonymization', multiple:true, options:[
            {label:'(0002,0000)	UL	File Meta Information Group Length	', value:'1', selected:true},
            {label:'(0002,0001)	OB	File Meta Information Version	', value:'1', selected:true},
            {label:'(0002,0002)	UI	Media Storage SOP Class UID	', value:'1', selected:true},
            {label:'(0002,0003)	UI	Media Storage SOP Instance UID	', value:'1', selected:true},
            {label:'(0002,0010)	UI	Transfer Syntax UID	', value:'1', selected:true},
            {label:'(0002,0012)	UI	Implementation Class UID	', value:'1', selected:true},
            {label:'(0002,0013)	SH	Implementation Version Name	', value:'1', selected:true},
            {label:'(0002,0016)	AE	Source Application Entity Title	', value:'1', selected:true},
            {label:'(0002,0017)	AE	Sending Application Entity Title	', value:'1', selected:true},
            {label:'(0002,0018)	AE	Receiving Application Entity Title	', value:'1', selected:true},
            {label:'(0002,0100)	UI	Private Information Creator UID	', value:'1', selected:true},
            {label:'(0002,0102)	OB	Private Information', value:'1', selected:true},

          ]}
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
