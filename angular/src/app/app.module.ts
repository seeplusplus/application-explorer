// @angular imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
// @ngrx imports
import { StoreModule, ActionReducerMap, MetaReducer, ActionReducer } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';
// component imports
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApplicationItemComponent } from './application-item/application-item.component';
import { ApplicationDetailComponent } from './application-detail/application-detail.component';
import { ApplicationListComponent } from './application-list/application-list.component';
import { AvailabilityComponent } from './availability/availability.component';
import { ApplicationHomeComponent } from './application-home/application-home.component';
// state imports 
import { AppState } from './state/app.state';
import { bookmarkReducer } from './state/bookmarks.reducer';
import { viewlaterReducer } from './state/viewlater.reducer';
import { applicationReducer } from './state/application.reducer';
// material imports 
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip'; 
import {MatInputModule} from '@angular/material/input';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { DayNamePipe } from './day-name.pipe'; 
import { ReactiveFormsModule } from '@angular/forms';
import { BookmarkDialog } from './dialog/bookmark-dialog.component';
import { MatDialogModule } from '@angular/material/dialog'; 
import { MatCheckboxModule } from '@angular/material/checkbox'; 

const reducers: ActionReducerMap<AppState> = { bookmarks: bookmarkReducer, savedForLater: viewlaterReducer, applications: applicationReducer };

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({keys: ['bookmarks', 'savedForLater', 'applications'], 
  rehydrate: true})(reducer);
}

const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];

@NgModule({
  declarations: [
    AppComponent,
    ApplicationItemComponent,
    ApplicationDetailComponent,
    ApplicationListComponent,
    AvailabilityComponent,
    ApplicationHomeComponent,
    DayNamePipe,
    BookmarkDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, {metaReducers}),
    BrowserAnimationsModule,
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
  bootstrap: [AppComponent]
})
export class AppModule { }
