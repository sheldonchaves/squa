import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {


  list = {
    label:'Query Pacs History',
    icon:'fa-download',
    labels:[
      {label:'label', prop:'label'},
      {label:'Extraction Date', prop:'extractionDate'},
      {label:'Retrieve Level', prop:'retrieveLevel'},
    ],
    items:[
      {id:'20190830D00005',label:'Query Idade Ossea', status:'warning', extractionDate:'26/08/2019 | 10:00', retrieveLevel: 'Study'},
      {id:'20190830D00005',label:'Query Idade Ossea', status:'success', extractionDate:'27/08/2019 | 10:00', retrieveLevel: 'Study'},
      {id:'20190830D00002',label:'Query Hemorragia Intracraniana', status:'danger', extractionDate:'30/08/2019 | 09:00', retrieveLevel: 'Study'},
      {id:'20190830D00005',label:'Query Idade Ossea', status:'success', extractionDate:'28/08/2019 | 10:00', retrieveLevel: 'Study'},
      {id:'20190830D00005',label:'Query Idade Ossea', status:'success', extractionDate:'29/08/2019 | 10:00', retrieveLevel: 'Study'},
      {id:'20190830D00002',label:'Query Hemorragia Intracraniana', status:'success', extractionDate:'30/08/2019 | 08:00', retrieveLevel: 'Study'},
      {id:'20190830D00011',label:'Query Tromboembolismo', status:'warning', extractionDate:'28/08/2019 | 01:00', retrieveLevel: 'Serie'},
      {id:'20190830D00011',label:'Query Tromboembolismo', status:'success', extractionDate:'29/08/2019 | 01:00', retrieveLevel: 'Serie'},
      {id:'20190830D00005',label:'Query Idade Ossea', status:'success', extractionDate:'01/09/2019 | 10:00', retrieveLevel: 'Study'},
      {id:'20190830D00005',label:'Query Idade Ossea', status:'success', extractionDate:'01/09/2019 | 10:00', retrieveLevel: 'Study'},
      {id:'20190830D00011',label:'Query Tromboembolismo', status:'warning', extractionDate:'02/09/2019 | 01:00', retrieveLevel: 'Serie'},
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
