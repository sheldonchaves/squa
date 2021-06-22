import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobComponent } from './job/job.component';
import { JoblistComponent } from './joblist/joblist.component';

const routes: Routes = [
  { path: '', component: JobComponent },
  { path: 'job', component: JobComponent },
  { path: 'joblist', component: JoblistComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchedulingRoutingModule { }
