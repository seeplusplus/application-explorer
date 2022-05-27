import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplicationHomeComponent } from './application-home/application-home.component';

const routes: Routes = [
  {
    path: 'detail', 
    loadChildren: () => import('./application-detail/details.module').then(m => m.DetailsModule)
  },
  { path: '', component: ApplicationHomeComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, 
    {
      initialNavigation: 'enabledBlocking'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
