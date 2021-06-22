import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-joblist',
  templateUrl: './joblist.component.html',
  styleUrls: ['./joblist.component.scss']
})
export class JoblistComponent implements OnInit {

  list = {
    label:'Job Execution History',
    icon:'fa-rocket',
    labels:[
      {label:'label', prop:'label'},
      {label:'Stages', prop:'stages'},
      {label:'Date', prop:'executionDate'},
    ],
    items:[
      {id:'EX20190830D00005',label:'Exec Idade Ossea', stages:'Extraction > Anonymization > Cloud IO > Inference > Return PACS', executionDate:'26/08/2019 | 10:00', status: 'success'},
      {id:'EX20190830D00011',label:'Exec Hemorragia IntraCraniana', stages:'Extraction > Anonymization > Cloud IO > Inference > Return PACS', executionDate:'26/08/2019 | 10:00', status: 'success'},
      {id:'EX20190830D00023',label:'Exec Tromboembolismo', stages:'Extraction > Anonymization > Cloud IO > Inference > Return PACS', executionDate:'26/08/2019 | 10:00', status: 'success'},
      {id:'EX20190830D00033',label:'Exec Custom 00155', stages:'Extraction > Anonymization', executionDate:'26/08/2019 | 10:00', status: 'danger'},
      {id:'EX20190830D00444',label:'Exec FreshBread 00003', stages:'Extraction > Anonymization > Cloud IO > FreshBread', executionDate:'26/08/2019 | 10:00', status: 'warning'},
      {id:'EX20190830D00005',label:'Exec Idade Ossea', stages:'Extraction > Anonymization > Cloud IO > Inference > Return PACS', executionDate:'26/08/2019 | 10:00', status: 'warning'},
      {id:'EX20190830D00011',label:'Exec Hemorragia IntraCraniana', stages:'Extraction > Anonymization > Cloud IO > Inference > Return PACS', executionDate:'26/08/2019 | 10:00', status: 'success'},
      {id:'EX20190830D00023',label:'Exec Tromboembolismo', stages:'Extraction > Anonymization > Cloud IO > Inference > Return PACS', executionDate:'26/08/2019 | 10:00', status: 'success'},
      {id:'EX20190830D00033',label:'Exec Custom 02299', stages:'Extraction > Anonymization', executionDate:'26/08/2019 | 10:00', status: 'warning'},
      {id:'EX20190830D00005',label:'Exec Idade Ossea', stages:'Extraction > Anonymization > Cloud IO > Inference > Return PACS', executionDate:'26/08/2019 | 10:00', status: 'success'},
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
