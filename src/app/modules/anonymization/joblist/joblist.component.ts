import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-joblist',
  templateUrl: './joblist.component.html',
  styleUrls: ['./joblist.component.scss']
})
export class JoblistComponent implements OnInit {

  list = {
    label:'Job Anonymization History',
    icon:'fa-user-times',
    labels:[
      {label:'label', prop:'label'},
      {label:'Anon Date', prop:'anonymizationDate'},
      {label:'Level', prop:'level'},
      {label:'Extraction ID', prop:'extractionQuery'},
      {label:'path', prop:'path'},
    ],
    items:[
      {id:'A2019083000005',label:'Job Anon Manual001', status:'warning', level:'AN_PSI_001',anonymizationDate:'26/08/2019 | 10:00', extractionQuery:'-', path: '//extraction/20190830D00005'},
      {id:'A2019083000005',label:'Job Anon query 001', status:'success', level:'AN_S_003', anonymizationDate:'27/08/2019 | 10:00', extractionQuery:'20190830D00005',  path: '-'},
      {id:'A2019083000005',label:'Job Anon query 002', status:'success', level:'Custom(PSI)', anonymizationDate:'30/08/2019 | 09:00', extractionQuery:'20190830D00005', path: '-'},
      {id:'A2019083000005',label:'Job Anon Manual002', status:'warning', level:'Custom(P)', anonymizationDate:'28/08/2019 | 10:00', extractionQuery:'-', path: '//extraction/20190830D00005'},
      {id:'A2019083000005',label:'Job Anon query 001', status:'success', level:'AN_PSI_001', anonymizationDate:'29/08/2019 | 10:00', extractionQuery:'20190830D00005', path: '-'},
      {id:'A2019083000005',label:'Job Anon query 001', status:'success', level:'Custom(P)', anonymizationDate:'30/08/2019 | 08:00', extractionQuery:'20190830D00005', path: '-'},
      {id:'A2019083000005',label:'Job Anon query 001', status:'success', level:'AN_S_003', anonymizationDate:'28/08/2019 | 01:00', extractionQuery:'20190830D00005', path: '-'},
      {id:'A2019083000005',label:'Job Anon Manual003', status:'success', level:'Custom(S)', anonymizationDate:'29/08/2019 | 01:00', extractionQuery:'-', path: '//extraction/20190830D00005'},
      {id:'A2019083000005',label:'Job Anon query 001', status:'success', level:'Custom(S)', anonymizationDate:'01/09/2019 | 10:00', extractionQuery:'20190830D00005', path: '-'},
      {id:'A2019083000005',label:'Job Anon query 001', status:'success', level:'AN_PSI_001', anonymizationDate:'01/09/2019 | 10:00', extractionQuery:'20190830D00005', path: '-'},
      {id:'A2019083000005',label:'Job Anon query 001', status:'success', level:'AN_S_003', anonymizationDate:'02/09/2019 | 01:00', extractionQuery:'20190830D00005', path: '-'},
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
