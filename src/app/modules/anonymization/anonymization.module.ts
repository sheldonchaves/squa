import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobComponent } from './job/job.component';
import { AnonymizationRoutingModule } from './anonymization-routing.module';
import { LayoutModule } from 'src/app/layout/layout.module';
import { JoblistComponent } from './joblist/joblist.component';
import { TypeComponent } from './type/type.component';



@NgModule({
  declarations: [
    JobComponent,
    JoblistComponent,
    TypeComponent
  ],
  imports: [
    CommonModule,
    AnonymizationRoutingModule,
    LayoutModule
  ]
})
export class AnonymizationModule { }
