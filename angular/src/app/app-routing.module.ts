import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplicationsListComponent } from './applications-list/applications-list.component'
import { ApplicationDetailComponent } from './application-detail/application-detail.component'

const routes: Routes = [
  { path: '', component: ApplicationsListComponent },
  { path: 'detail', component: ApplicationDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
