import { CommonModule } from '@angular/common';
import { ApplicationModule, NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AvailabilityModule } from '../availability/availability.module';
import { ApplicationDetailComponent } from './application-detail.component';
import { DetailsRoutingModule } from './details-routing.module';



@NgModule({
  declarations: [ApplicationDetailComponent],
  imports: [
    CommonModule,
    ApplicationModule,
    DetailsRoutingModule,
    AvailabilityModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class DetailsModule { }
