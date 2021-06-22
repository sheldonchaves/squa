import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.scss']
})
export class SimpleComponent implements OnInit {

  form = {
    label:'Job Simple Extraction',
    icon:'fa-download',
    items:[
      {
        type:'row', items:[
          {type:'text',label:'Job Name', placeholder:'', value:''},
          {type:'text',label:'jobID', placeholder:'', value:'20190830D00005', disabled:true},
          {type:'text',label:'Path out', placeholder:'', value:'//extraction/20190830D00005', disabled:true},
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
          {type:'checkbox',label:'Pacs', options:[
            {label:'SP Central', checked:true},
            {label:'RIO', checked:false},
          ]},
          // {type:'text',label:'Patient Name', placeholder:'', value:''},
          {type:'text',label:'Study Description', placeholder:'', value:''},
          
        ]
      },
      {
        type:'fieldset', label:'Filters', items:[
          {type:'text',label:'Filter Series Description', placeholder:'web_t2_tse_tra;web_t2_tse_tra_hr', value:''},
          {type:'text',label:'Filter Study Description', placeholder:'PELVE^ROTINAS;CORPO SYMPHONY TIM^PELVE', value:''},
          {type:'text',label:'Filter Manufacturer', placeholder:'GE;Philips', value:''},
        ]
      },
      {
        type:'fieldset', label:'Study Date', items:[
          {type:'list',label:'Date Range presets', options:[
            {label:'D-1', value:'1'},
            {label:'Last week', value:'2'},
            {label:'Last month', value:'2'},
            {label:'Last year', value:'2'},
            {label:'Current week', value:'2'},
            {label:'Current Month', value:'2'},
          ]},
          {type:'date',label:'From', placeholder:''},
          {type:'date',label:'To', placeholder:''},
          // {type:'button',label:'Add New', icon:'plus-circle', style:'btn-primary'},
        ]
      },
      // {
      //   type:'row', items:[
      //     {type:'text',label:'Study Instance UID', placeholder:'', value:''},
      //     {type:'text',label:'Series Instance UID', placeholder:''},
      //     {type:'text',label:'Accession Number', placeholder:''}
      //   ]
      // },
      
      {
        type:'row', items:[
          
          {type:'list',label:'Query Retrieve Level', options:[
            {label:'STUDY', value:'1'},
            {label:'SERIE', value:'2'},
            {label:'INSTANCE', value:'3'},
          ]},
          {type:'checkbox',label:'Modalities In Study', options:[
            {label:'CT', checked:false},
            {label:'MG', checked:true},
            {label:'SR', checked:false},
            {label:'MR', checked:false},
            {label:'DX', checked:false},
            {label:'RM', checked:false}
          ]},
          {type:'checkbox',label:'Filter Modalities (includes)', options:[
            {label:'CT', checked:false},
            {label:'MG', checked:false},
            {label:'SR', checked:true},
            {label:'MR', checked:false},
            {label:'DX', checked:false},
            {label:'RM', checked:false}
          ]},
          {type:'list',label:'Preset Anonymization', options:[
            {label:'AN_PSI_001', value:'1'},
            {label:'AN_P_002', value:'2'},
            {label:'AN_S_003', value:'3'},
          ]},
        ]
      }
    ],
    actions:[
      // {label:'Edit', style:'btn-warning', icon:'fa-pencil-square'},
      {label:'Preview', style:'btn-primary', icon:'fa-search'},
      {label:'Save', style:'btn-primary', icon:'fa-cloud-upload', disabled:true},
    ]
  }

  constructor() { }

  ngOnInit() {
  }

}
