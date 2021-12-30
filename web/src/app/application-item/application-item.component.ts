import { Store, select } from "@ngrx/store";
import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { Application } from '../application';
import { selectBookmarkedApplications, selectSavedApplications } from "../selector/application.selectors";

@Component({
  selector: 'app-application-item',
  templateUrl: './application-item.component.html',
  styleUrls: ['./application-item.component.sass']
})


export class ApplicationItemComponent implements OnInit {
  @Input() application: Application;
  @Output() bookmarkToggled = new EventEmitter();
  @Output() saveToggled = new EventEmitter();

  savedForLater = false
  isBookmarked = false
  
  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.pipe(select(selectBookmarkedApplications))
      .subscribe(b => this.isBookmarked = b.filter(a => a.id  == this.application.id).length > 0);
    this.store.pipe(select(selectSavedApplications))
      .subscribe(b => this.savedForLater = b.filter(a => a.id  == this.application.id).length > 0);
  }

  public onBookmark() {
    this.isBookmarked = !this.isBookmarked;
    this.bookmarkToggled
      .emit({ 
        applicationId: this.application.id, 
        applicationBookmarked: this.isBookmarked 
      });
  }

  public onSaved() {
    this.savedForLater = !this.savedForLater;
    this.saveToggled
      .emit({
        applicationId: this.application.id,
        willViewLater: this.savedForLater
      })
  }
}
