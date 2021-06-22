import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExtractionRoutingModule } from './extraction-routing.module';
import { JobComponent } from './job/job.component';
import { LayoutModule } from 'src/app/layout/layout.module';
import { ListComponent } from './list/list.component';
import { TypeComponent } from './type/type.component';
import { SimpleComponent } from './simple/simple.component';
import { ImportComponent } from './import/import.component';


import { SidebarModule } from 'primeng/sidebar';

@NgModule({
  declarations: [
    JobComponent,
    ListComponent,
    TypeComponent,
    SimpleComponent,
    ImportComponent,
  ],
  imports: [
    CommonModule,
    ExtractionRoutingModule,
    LayoutModule,
    SidebarModule
  ]
})
export class ExtractionModule { }
