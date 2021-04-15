import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApplicationItemComponent } from './application-item/application-item.component';
import { HttpClientModule } from '@angular/common/http';
import { ApplicationDetailComponent } from './application-detail/application-detail.component';
import { ApplicationsListComponent } from './applications-list/applications-list.component';
import { StoreModule } from '@ngrx/store';
import { AvailabilityComponent } from './availability/availability.component';

@NgModule({
  declarations: [
    AppComponent,
    ApplicationItemComponent,
    ApplicationDetailComponent,
    ApplicationsListComponent,
    AvailabilityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({}, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
