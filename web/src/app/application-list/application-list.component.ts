import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { Application } from '../application';

import { addBookmark, removeBookmark, addForViewLater, removeFromViewLater } from '../state/application.actions'

@Component({
  selector: 'app-application-list',
  templateUrl: './application-list.component.html',
  styleUrls: ['./application-list.component.sass']
})
export class ApplicationListComponent implements OnInit {
  @Input()
  applications: Application[];

  @Output()
  listStateChanged: EventEmitter<number> = new EventEmitter();

  ngOnInit(): void {

  }
  constructor(private store: Store) {}

  public handleBookmarkEvent(bookmarkEvent) {
    if (bookmarkEvent.applicationBookmarked)
      this.store.dispatch(addBookmark({ applicationId: bookmarkEvent.applicationId }));
    else
      this.store.dispatch(removeBookmark({  applicationId: bookmarkEvent.applicationId }));
    
    this.listStateChanged.emit(bookmarkEvent.applicationId);
  }

  public handleSaveEvent(viewLaterEvent) {
    if (viewLaterEvent.willViewLater)
      this.store.dispatch(addForViewLater({ applicationId: viewLaterEvent.applicationId }));
    else
      this.store.dispatch(removeFromViewLater({  applicationId: viewLaterEvent.applicationId }));

    this.listStateChanged.emit(viewLaterEvent.applicationId);
  }
}
