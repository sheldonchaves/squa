import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {

  selectedItem:any;
  selectedSubItem:any;

  menu = [
    {name:'Extraction', link:'extraction', sub:[
      {name:'Job', link:'job'},
      {name:'Type', link:'type'},
      {name:'List', link:'list'},
      {name:'Simplify', link:'simple'},
      {name:'Import CSV', link:'import'},
    ]},
    {name:'Anonymization', link:'anonymization', sub:[
      {name:'Job', link:'job'},
      {name:'Type', link:'type'},
      {name:'Job List', link:'joblist'},
    ]},
    {name:'Execution', link:'execution', sub:[
      {name:'Job', link:'job'},
      {name:'Job List', link:'joblist'},
    ]},
    {name:'Scheduling', link:'scheduling', sub:[
      {name:'Job', link:'job'},
      {name:'Job List', link:'joblist'},
    ]},
    {name:'Cloud IO', link:'cloudio', sub:[
      {name:'Job', link:'job'},
      {name:'Job List', link:'joblist'},
    ]},
    {name:'Cloud container', link:'cloudcontainer', sub:[
      {name:'Job', link:'job'},
      {name:'Job List', link:'joblist'},
    ]}
  ];

  constructor(public router: Router, private activatedRoute: ActivatedRoute) {
    // console.log(this.router.routerState.snapshot.url);


    this.router.events
      .subscribe(
        ( event: any ) : void => {

            var snapshot = this.router.routerState.snapshot.root;
            if (event instanceof NavigationEnd){

              const route = this.router.routerState.snapshot.url.split('/').filter(function(e){return e})

              if (route[0] && route[0].length){
                this.selectedItem = this.menu.filter(item => item.link === route[0])[0];
              } else{
                this.selectedItem = null;
                this.selectedSubItem = null;
              }
              if (route[1] && route[1].length){
                this.selectedSubItem = this.selectedItem.sub.filter(item => item.link === route[1])[0];
              }
            }
        }
      );

  }

  ngOnInit() {



  }

  gotoUrl(item:any, parent:any){
    if (item.link.length){
      if (parent){
        this.router.navigateByUrl(`/${parent.link}/${item.link}`);
      } else {
        this.router.navigateByUrl(`/${item.link}`);
        this.selectedSubItem = null;
      }
    }
  }

  selectItem(selectedItem){
    this.selectedItem = this.selectedItem == selectedItem?null:selectedItem;
    if (selectedItem.link){
      this.router.navigateByUrl(`/${selectedItem.link}`);
    }
  }

  selectSubItem(selectedSubItem){
    this.selectedSubItem = this.selectedSubItem == selectedSubItem?null:selectedSubItem;
  }

  loginPage(){
    // document.querySelector('.container-fluid').classList.toggle('login');
  }


  goto(){
    this.router.navigateByUrl('/extraction');
  }

}
