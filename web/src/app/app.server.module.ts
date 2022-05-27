import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { Store } from '@ngrx/store';

import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { ApplicationHomeComponent } from './application-home/application-home.component';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
  ],
  providers: [
    { provide: Store, useValue: null }
  ],
  bootstrap: [AppComponent, ApplicationHomeComponent],
})
export class AppServerModule {}
