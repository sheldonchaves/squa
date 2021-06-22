import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JoblistComponent } from './joblist/joblist.component';
import { JobComponent } from './job/job.component';
import { LayoutModule } from 'src/app/layout/layout.module';
import { ExecutionRoutingModule } from './execution-routing.module';



@NgModule({
  declarations: [JoblistComponent, JobComponent],
  imports: [
    CommonModule,
    ExecutionRoutingModule,
    LayoutModule
  ]
})
export class ExecutionModule { }
