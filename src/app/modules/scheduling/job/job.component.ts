import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent implements OnInit {


  form = {
    label:'Job Scheduling',
    icon:'fa-calendar',
    items:[
      {
        type:'row', items:[
          {type:'text',label:'Scheduling Name', placeholder:'', value:''},
          {type:'text',label:'SchedulingID', placeholder:'', value:'SC2019083000005', disabled:true},
          {type:'list',label:'Priority Level', options:[
            {label:'Normal', value:'3'},
            {label:'Important', value:'2'},
            {label:'Critical', value:'1'},
            {label:'Low', value:'4'}
          ]},
        ]
      },
      {
        type:'fieldset', label:'Source (ID)', icon:'', items:[
          {type:'list',label:'Execution Job', options:[
            {label:'20190830D00005 - Execution Idade Ossea', value:'1'},
            {label:'20190830D00022 - Execution Hemorragia IntraCraniana', value:'2'},
            {label:'20190830D00199 - Execution Tromboembolismo', value:'3'},
            {label:'20190829D09877 - Execution Custom Partner 002', value:'1'},
            {label:'20190830D00005 - Execution Idade Ossea', value:'1'},
            {label:'20190830D00022 - Execution Hemorragia IntraCraniana', value:'2'},
            {label:'20190830D00199 - Execution Tromboembolismo', value:'3'},
            {label:'20190829D09877 - Execution Custom Partner 002', value:'1'},
            {label:'20190830D00005 - Execution Idade Ossea', value:'1'},
            {label:'20190830D00022 - Execution Hemorragia IntraCraniana', value:'2'},
            {label:'20190830D00199 - Execution Tromboembolismo', value:'3'},
            {label:'20190829D09877 - Execution Custom Partner 002', value:'1'},
          ]},
          {type:'text',label:'Path of Scheduling Job', placeholder:'', value:'//scheduling/SC2019083000005'},
        ]
      },

      {
        type:'fieldset', label:'Repetition', items:[
          {type:'list',label:'Week Selection', multiple:true, options:[
            {label:'Every day', value:'2'},
            {label:'Day of week', value:'1'},
            {label:'Day of month', value:'1'},
            {label:'Only once', value:'1'},
            {label:'Custom', value:'1'},
          ]},
          {type:'date',label:'Day of month', placeholder:'', value:''},
          {type:'checkbox',label:'Days of week', options:[
            {label:'Monday', checked:true},
            {label:'Tuesday', checked:false},
            {label:'Wednesday', checked:false},
            {label:'Thursday', checked:false},
            {label:'Friday', checked:false},
            {label:'Saturday', checked:false},
            {label:'Sunday', checked:false},
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
