// @angular imports
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// @ngrx imports
import { StoreModule, ActionReducerMap, MetaReducer, ActionReducer } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';

// component imports
import { AppComponent } from './app.component';

// state imports
import { AppState } from './state/app.state';
import { bookmarkReducer } from './state/bookmarks.reducer';
import { viewlaterReducer } from './state/viewlater.reducer';
import { applicationReducer } from './state/application.reducer';

// base module
import { AppModule } from './app.module';

const reducers: ActionReducerMap<AppState> = {
  bookmarks: bookmarkReducer,
  savedForLater: viewlaterReducer,
  applications: applicationReducer
};

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({keys: ['bookmarks', 'savedForLater', 'applications'],
  rehydrate: true})(reducer);
}

const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];

@NgModule({
  imports: [
    AppModule,
    StoreModule.forRoot(reducers, {metaReducers}),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppBrowserModule { }
