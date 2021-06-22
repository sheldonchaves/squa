import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent implements OnInit {

  form = {
    label:'Job Execution',
    icon:'fa-rocket',
    items:[
      {
        type:'row', items:[
          {type:'text',label:'Job Name', placeholder:'', value:'Execution Idade Ossea 002 RX Google'},
          {type:'text',label:'JobID', placeholder:'', value:'EX019083000005', disabled:true},
          {type:'list',label:'Priority Level', options:[
            {label:'Normal', value:'3'},
            {label:'Important', value:'2'},
            {label:'Critical', value:'1'},
            {label:'Low', value:'4'}
          ]},
        ]
      },
      {
        type:'fieldset', label:'Extraction Stage', icon:'fa-share', items:[
          {type:'list',label:'Extraction Job id', options:[
            {label:'E20190830D00005', value:'1'},
            {label:'E20190830D00022', value:'2'},
            {label:'E20190830D00199', value:'3'},
            {label:'E20190829D09877', value:'1'},
            {label:'E20190811D03232', value:'2'},
            {label:'E20190812D00011', value:'3'},
            {label:'E20190812D00033', value:'1'},
            {label:'E20190831D00111', value:'2'},
            {label:'E20190830D00009', value:'3'},
          ]},
          {type:'text',label:'Extraction Name', placeholder:'', value:'Query Idade Ossea', disabled:true},
          {type:'list',label:'Priority', options:[
            {label:'Critical', value:'1'},
            {label:'Important', value:'2'},
            {label:'Normal', value:'3'},
            {label:'Low', value:'1'}
          ]},
        ]
      },
      {
        type:'fieldset', label:'Anonymization Stage', icon:'fa-share', items:[
          {type:'list',label:'Anonymization Job id', options:[
            {label:'A20190830D00005', value:'1'},
            {label:'A20190830D00022', value:'2'},
            {label:'A20190830D00199', value:'3'},
            {label:'A20190829D09877', value:'1'},
            {label:'A20190811D03232', value:'2'},
            {label:'A20190812D00011', value:'3'},
            {label:'A20190812D00033', value:'1'},
            {label:'A20190831D00111', value:'2'},
            {label:'A20190830D00009', value:'3'},
          ]},
          {type:'text',label:'Anonymization Name', placeholder:'', value:'AN_PSI_001', disabled:true},
          {type:'list',label:'Priority', options:[
            {label:'Critical', value:'1'},
            {label:'Important', value:'2'},
            {label:'Normal', value:'3'},
            {label:'Low', value:'1'}
          ]},
        ]
      },
      {
        type:'fieldset', label:'Cloud IO Stage', icon:'fa-share', items:[
          {type:'list',label:'Cloud IO Job id', options:[
            {label:'IO20190830D00005', value:'1'},
            {label:'IO20190830D00022', value:'2'},
            {label:'IO20190830D00199', value:'3'},
            {label:'IO20190829D09877', value:'1'},
            {label:'IO20190811D03232', value:'2'},
            {label:'IO20190812D00011', value:'3'},
            {label:'IO20190812D00033', value:'1'},
            {label:'IO20190831D00111', value:'2'},
            {label:'IO20190830D00009', value:'3'},
          ]},
          {type:'text',label:'Cloud IO Name', placeholder:'', value:'Send to Google Health', disabled:true},
          {type:'list',label:'Priority', options:[
            {label:'Critical', value:'1'},
            {label:'Important', value:'2'},
            {label:'Normal', value:'3'},
            {label:'Low', value:'1'}
          ]},
        ]
      },
      {
        type:'fieldset', label:'Inference Stage (Container)', icon:'fa-share', items:[
          {type:'list',label:'Container Inference Job id', options:[
            {label:'CI20190830D00005', value:'1'},
            {label:'CI20190830D00022', value:'2'},
            {label:'CI20190830D00199', value:'3'},
            {label:'CI20190829D09877', value:'1'},
            {label:'CI20190811D03232', value:'2'},
            {label:'CI20190812D00011', value:'3'},
            {label:'CI20190812D00033', value:'1'},
            {label:'CI20190831D00111', value:'2'},
            {label:'CI20190830D00009', value:'3'},
          ]},
          {type:'text',label:'Container Inference Name', placeholder:'', value:'Idade Ossea RX 004', disabled:true},
          {type:'list',label:'Priority', options:[
            {label:'Critical', value:'1'},
            {label:'Important', value:'2'},
            {label:'Normal', value:'3'},
            {label:'Low', value:'1'}
          ]},
        ]
      },
      {
        type:'fieldset', label:'Return/Send Stage', icon:'fa-share', items:[
          {type:'list',label:'Return Stage Job id', options:[
            {label:'RT20190830D00005', value:'1'},
            {label:'RT20190830D00022', value:'2'},
            {label:'RT20190830D00199', value:'3'},
            {label:'RT20190829D09877', value:'1'},
            {label:'RT20190811D03232', value:'2'},
            {label:'RT20190812D00011', value:'3'},
            {label:'RT20190812D00033', value:'1'},
            {label:'RT20190831D00111', value:'2'},
            {label:'RT20190830D00009', value:'3'},
          ]},
          {type:'text',label:'Return Name', placeholder:'', value:'Return to Pacs Central', disabled:true},
          {type:'list',label:'Priority', options:[
            {label:'Critical', value:'1'},
            {label:'Important', value:'2'},
            {label:'Normal', value:'3'},
            {label:'Low', value:'1'}
          ]},
        ]
      },
      {
        type:'fieldset', label:'Return/Send Stage', icon:'fa-share', items:[
          {type:'list',label:'Return Stage Job id', options:[
            {label:'RT20190830D00022', value:'2'},
            {label:'RT20190830D00199', value:'3'},
            {label:'RT20190829D09877', value:'1'},
            {label:'RT20190811D03232', value:'2'},
            {label:'RT20190812D00011', value:'3'},
            {label:'RT20190812D00033', value:'1'},
            {label:'RT20190831D00111', value:'2'},
            {label:'RT20190830D00009', value:'3'},
          ]},
          {type:'text',label:'Return Name', placeholder:'', value:'Send to Partner 002', disabled:true},
          {type:'list',label:'Priority', options:[
            {label:'Critical', value:'1'},
            {label:'Important', value:'2'},
            {label:'Normal', value:'3'},
            {label:'Low', value:'1'}
          ]},
        ]
      },
      {
        type:'fieldset', label:'New Stage', icon:'fa-plus-circle', items:[
          {type:'list',label:'Type of Stage', options:[
            {label:'Extraction', value:'2'},
            {label:'Anonymization', value:'3'},
            {label:'Cloud IO', value:'1'},
            {label:'Inference', value:'2'},
            {label:'Return/Send', value:'3'},
          ]},
          {type:'list',label:'Job id', options:[
            {label:'RT20190830D00022', value:'2'},
            {label:'RT20190830D00199', value:'3'},
            {label:'RT20190829D09877', value:'1'},
            {label:'RT20190811D03232', value:'2'},
            {label:'RT20190812D00011', value:'3'},
            {label:'RT20190812D00033', value:'1'},
            {label:'RT20190831D00111', value:'2'},
            {label:'RT20190830D00009', value:'3'},
          ]},
          {type:'button',label:'Add New', icon:'plus-circle', style:'btn-primary'},
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
