import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplicationHomeComponent } from './application-home/application-home.component';
import { ApplicationDetailComponent } from './application-detail/application-detail.component';

const routes: Routes = [
  { path: 'detail/:id', component: ApplicationDetailComponent },
  { path: '', component: ApplicationHomeComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
