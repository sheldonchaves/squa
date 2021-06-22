import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';


const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'anonymization', loadChildren: () => import(`./modules/anonymization/anonymization.module`).then(m => m.AnonymizationModule) },
  { path: 'cloudcontainer', loadChildren: () => import(`./modules/cloudcontainer/cloudcontainer.module`).then(m => m.CloudcontainerModule) },
  { path: 'cloudio', loadChildren: () => import(`./modules/cloudio/cloudio.module`).then(m => m.CloudioModule) },
  { path: 'execution', loadChildren: () => import(`./modules/execution/execution.module`).then(m => m.ExecutionModule) },
  { path: 'extraction', loadChildren: () => import(`./modules/extraction/extraction.module`).then(m => m.ExtractionModule) },
  { path: 'scheduling', loadChildren: () => import(`./modules/scheduling/scheduling.module`).then(m => m.SchedulingModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
