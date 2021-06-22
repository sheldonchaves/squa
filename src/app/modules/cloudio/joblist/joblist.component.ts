import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-joblist',
  templateUrl: './joblist.component.html',
  styleUrls: ['./joblist.component.scss']
})
export class JoblistComponent implements OnInit {

  list = {
    label:'Job Cloud IO History',
    icon:'fa-retweet',
    labels:[
      {label:'label', prop:'label'},
      {label:'Date', prop:'date'},
      {label:'From', prop:'from'},
      {label:'To', prop:'to'},
    ],
    items:[
      {id:'A2019083000005',label:'Job Cloud IO 001', status:'warning', from:'Job Anony 0917', to:'Google Health', date:'26/08/2019 | 10:00' },
      {id:'A2019083000005',label:'Job Cloud IO 001', status:'success', from:'Job Anony 0027', to:'Partner 002', date:'27/08/2019 | 10:00' },
      {id:'A2019083000005',label:'Job Cloud IO 002', status:'success', from:'Google Health', to:'Pacs Central', date:'30/08/2019 | 09:00' },
      {id:'A2019083000005',label:'Job Cloud IO 002', status:'warning', from:'Google Health', to:'Pacs Central', date:'28/08/2019 | 10:00' },
      {id:'A2019083000005',label:'Job Cloud IO 001', status:'success', from:'Job Anony 0037', to:'Freshbread', date:'29/08/2019 | 10:00' },
      {id:'A2019083000005',label:'Job Cloud IO 001', status:'success', from:'Job Anony 0777', to:'Google Health', date:'30/08/2019 | 08:00' },
      {id:'A2019083000005',label:'Job Cloud IO 001', status:'success', from:'Job Anony 8989', to:'Google Health', date:'28/08/2019 | 01:00' },
      {id:'A2019083000005',label:'Job Cloud IO 003', status:'success', from:'Google Health', to:'Pacs Central', date:'29/08/2019 | 01:00' },
      {id:'A2019083000005',label:'Job Cloud IO 001', status:'success', from:'Google Health', to:'Pacs Central', date:'01/09/2019 | 10:00' },
      {id:'A2019083000005',label:'Job Cloud IO 001', status:'success', from:'Job Anony 1141', to:'Google Health', date:'01/09/2019 | 10:00' },
      {id:'A2019083000005',label:'Job Cloud IO 001', status:'success', from:'Job Anony 9941', to:'Google Health', date:'02/09/2019 | 01:00' },
    ],
    actions:[
      {label:'Edit', style:'btn-warning', icon:'fa-pencil-square'},
      {label:'Reload', style:'btn-primary', icon:'fa-refresh'},
    ]
  }


  constructor() { }

  ngOnInit() {
  }

}
