import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent implements OnInit {


  form = {
    label:'Job Container ',
    icon:'fa-th-large',
    items:[
      {
        type:'row', items:[
          {type:'text',label:'Job Name', placeholder:'', value:''},
          {type:'text',label:'JobID', placeholder:'', value:'C2019083000005', disabled:true},
          {type:'list',label:'Priority Level', options:[
            {label:'Normal', value:'3'},
            {label:'Important', value:'2'},
            {label:'Critical', value:'1'},
            {label:'Low', value:'4'}
          ]},
        ]
      },
      {
        type:'fieldset', label:'Type', icon:'', items:[
          {type:'list',label:'Container', options:[
            {label:'Container Docker', value:'1'},
          ]},
          {type:'list',label:'Template', options:[
            {label:'Python3 inference API GPU', value:'1'},
            {label:'Python2 inference API', value:'2'},
            {label:'Custom API 001', value:'3'},
          ]},
          {type:'list',label:'Result Type', options:[
            {label:'Image', value:'1'},
            {label:'Value', value:'2'},
            {label:'Study', value:'3'},
            {label:'Custom 001', value:'4'},
          ]},
        ]
      },
      {
        type:'fieldset', label:'Code', icon:'', items:[
          {type:'text',label:'Git Source', placeholder:'', value:'https://bitbucket.org/dasainova/code001'},
          {type:'list',label:'Template', options:[
            {label:'Python3 Tensorflow', value:'2'},
            {label:'Python3 Keras', value:'1'},
          ]},
        ]
      },
      {
        type:'fieldset', label:'Destination', icon:'', items:[
          {type:'list',label:'Target', options:[
            {label:'Google Cloud', value:'1'},
          ]},
          {type:'checkbox',label:'After inference', options:[
            {label:'Kill Container', checked:true},
            {label:'Send a notification Partner 1', checked:false},
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
