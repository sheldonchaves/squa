import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobComponent } from './job/job.component';
import { ListComponent } from './list/list.component';
import { TypeComponent } from './type/type.component';
import { SimpleComponent } from './simple/simple.component';
import { ImportComponent } from './import/import.component';

const routes: Routes = [
  { path: '', component: JobComponent },
  { path: 'job', component: JobComponent },
  { path: 'type', component: TypeComponent },
  { path: 'list', component: ListComponent },
  { path: 'simple', component: SimpleComponent },
  { path: 'import', component: ImportComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExtractionRoutingModule { }
