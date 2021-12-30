import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { selectBookmarkedApplications } from '../selector/application.selectors';
import { Application } from '../types/application';
@Component({
  selector: 'app-bookmark-dialog',
  templateUrl: 'bookmark-dialog.component.html',
})
export class BookmarkDialogComponent implements OnInit {
  bookmarkedApplications: Application[];

  constructor(private store: Store) {}

  ngOnInit(): void {
      this.store.pipe(select(selectBookmarkedApplications))
        .subscribe(d => this.bookmarkedApplications = d);
  }
}
