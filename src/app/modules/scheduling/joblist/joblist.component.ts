import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-joblist',
  templateUrl: './joblist.component.html',
  styleUrls: ['./joblist.component.scss']
})
export class JoblistComponent implements OnInit {


  list = {
    label:'Job Scheduling Execution History',
    icon:'fa-calendar',
    labels:[
      {label:'label', prop:'label'},
      {label:'Scheduling Date', prop:'schedulingDate'},
      {label:'Repetition', prop:'repetition'},
    ],
    items:[
      {id:'20190830D00005',label:'Job Schedule Idade Ossea', status:'success', schedulingDate:'26/08/2019 | 10:00', repetition:'Every Day' },
      {id:'20190830D00002',label:'Job Schedule Hemorragia Intracraniana', status:'success', schedulingDate:'30/08/2019 | 09:00', repetition:'Every Day'},
      {id:'20190830D00011',label:'Job Schedule Tromboembolismo', status:'success', schedulingDate:'28/08/2019 | 01:00', repetition:'Every Day'},
      {id:'20190830D00005',label:'Job Schedule Extraction Custom', status:'success', schedulingDate:'01/09/2019 | 10:00', repetition:'Monday'},
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
