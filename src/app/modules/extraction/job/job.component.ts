import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent implements OnInit {

  form = {
    label:'Job Pacs',
    icon:'fa-download',
    items:[
      {
        type:'row', items:[
          {type:'text',label:'Job Name', placeholder:'', value:''},
          {type:'text',label:'jobID', placeholder:'', value:'20190830D00005', disabled:true},
          {type:'list',label:'Priority Level', options:[
            {label:'Normal', value:'3'},
            {label:'Important', value:'2'},
            {label:'Critical', value:'1'},
            {label:'Low', value:'4'}
          ]},
        ]
      },
      {
        type:'row', items:[
          {type:'text',label:'Patient Name', placeholder:'', value:''},
          {type:'list',label:'Study Description pre definition', options:[
            {label:'Cranio CT MR 001', value:'1'},
            {label:'Mamo RX 002', value:'2'},
          ]},
          {type:'button',label:'Add New', icon:'plus-circle', style:'btn-primary'},
        ]
      },
      {
        type:'fieldset', label:'Study Date', items:[
          {type:'date',label:'From', placeholder:''},
          {type:'date',label:'To', placeholder:''},
          {type:'list',label:'Date Range pre definition', options:[
            {label:'D-1', value:'1'},
            {label:'Last week', value:'2'},
            {label:'Last month', value:'2'},
            {label:'Last year', value:'2'},
            {label:'Current week', value:'2'},
            {label:'Current Month', value:'2'},
          ]},
          {type:'button',label:'Add New', icon:'plus-circle', style:'btn-primary'},
        ]
      },
      {
        type:'row', items:[
          {type:'text',label:'Study Instance UID', placeholder:'', value:''},
          {type:'text',label:'Series Instance UID', placeholder:''},
          {type:'text',label:'Accession Number', placeholder:''}
        ]
      },
      {
        type:'row', items:[
          {type:'text',label:'Path', placeholder:'', value:'//extraction/20190830D00005', disabled:true},
        ]
      },
      {
        type:'row', items:[
          {type:'text',label:'Manufacturer', placeholder:'', value:''},
          {type:'list',label:'Query Retrieve Level', options:[
            {label:'STUDY', value:'1'},
            {label:'SERIE', value:'2'},
            {label:'INSTANCE', value:'3'},
          ]},
          {type:'checkbox',label:'Modalities In Study', options:[
            {label:'CT', checked:true},
            {label:'MR', checked:false},
            {label:'DX', checked:false},
            {label:'RM', checked:false}
          ]},
        ]
      }
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
