import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationDetailComponent } from '../application-detail/application-detail.component';

const routes: Routes = [
  {
    path: ':id',
    component: ApplicationDetailComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  declarations: [
  ],
  exports: [RouterModule]
})
export class DetailsRoutingModule { }
