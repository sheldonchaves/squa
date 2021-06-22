import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent implements OnInit {

  form = {
    label:'Job Cloud IO',
    icon:'fa-retweet',
    items:[
      {
        type:'row', items:[
          {type:'text',label:'Job Name', placeholder:'', value:''},
          {type:'text',label:'JobID', placeholder:'', value:'IO2019083000005', disabled:true},
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
          {type:'text',label:'EndPoint', placeholder:'', value:'10.120.14.10/cloudio/api01'},
          {type:'text',label:'Path IN', placeholder:'', value:''},
          {type:'list',label:'Extraction Query', options:[
            {label:'', value:''},
            {label:'20190830D00005', value:'1'},
            {label:'20190830D00022', value:'2'},
            {label:'20190830D00199', value:'3'},
          ]},
          {type:'list',label:'Anonymization Job', options:[
            {label:'', value:''},
            {label:'20190830D00005', value:'1'},
            {label:'20190830D00022', value:'2'},
            {label:'20190830D00199', value:'3'},
          ]},
        ]
      },
      {
        type:'fieldset', label:'Destination', icon:'', items:[
          {type:'list',label:'Target', options:[
            {label:'Pacs Central', value:'1'},
            {label:'Google Health', value:'0'},
            {label:'Freshbread Portal', value:'2'},
            {label:'Partner 1', value:'3'},
          ]},
        ]
      },
      {
        type:'row', items:[
          {type:'checkbox',label:'After Job', options:[
            {label:'Clear Source path', checked:false},
            {label:'Send a notification Partner 1', checked:false},
            {label:'Update System 002', checked:false},
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
