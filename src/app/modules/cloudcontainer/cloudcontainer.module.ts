import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobComponent } from './job/job.component';
import { JoblistComponent } from './joblist/joblist.component';
import { LayoutModule } from 'src/app/layout/layout.module';
import { CloudContainerRoutingModule } from './cloudcontainer-routing.module';



@NgModule({
  declarations: [JobComponent, JoblistComponent],
  imports: [
    CommonModule,
    CloudContainerRoutingModule,
    LayoutModule
  ]
})
export class CloudcontainerModule { }
