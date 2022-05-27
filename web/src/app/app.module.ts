// @angular imports
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserModule } from '@angular/platform-browser';
// component imports
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApplicationHomeComponent } from './application-home/application-home.component';
import { ApplicationItemComponent } from './application-item/application-item.component';
import { ApplicationListComponent } from './application-list/application-list.component';
import { AvailabilityModule } from './availability/availability.module';
import { DayNamePipe } from './day-name.pipe';
import { BookmarkDialogComponent } from './dialog/bookmark-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    ApplicationItemComponent,
    ApplicationListComponent,
    ApplicationHomeComponent,
    DayNamePipe,
    BookmarkDialogComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AvailabilityModule,
    AppRoutingModule,
    HttpClientModule,
    MatSelectModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatTooltipModule,
    MatButtonToggleModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [ApplicationHomeComponent]
})
export class AppModule { }
