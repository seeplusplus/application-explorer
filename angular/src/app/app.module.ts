// @angular imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
// @ngrx imports
import { StoreModule } from '@ngrx/store';
// component imports
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApplicationItemComponent } from './application-item/application-item.component';
import { ApplicationDetailComponent } from './application-detail/application-detail.component';
import { ApplicationListComponent } from './application-list/application-list.component';
import { AvailabilityComponent } from './availability/availability.component';
import { ApplicationHomeComponent } from './application-home/application-home.component';
// state imports 
import { bookmarkReducer } from './state/bookmarks.reducer';
import { viewlaterReducer } from './state/viewlater.reducer';
import { applicationReducer } from './state/application.reducer';
// material imports 
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { DayNamePipe } from './day-name.pipe'; 
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ApplicationItemComponent,
    ApplicationDetailComponent,
    ApplicationListComponent,
    AvailabilityComponent,
    ApplicationHomeComponent,
    DayNamePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ bookmarks: bookmarkReducer, savedForLater: viewlaterReducer, applications: applicationReducer }),
    BrowserAnimationsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatButtonToggleModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
