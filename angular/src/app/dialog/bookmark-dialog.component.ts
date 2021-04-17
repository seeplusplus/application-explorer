import { Component,  Inject, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Store, select } from '@ngrx/store';
import { selectBookmarkedApplications } from '../selector/application.selectors';
import { Application } from '../application';
@Component({
  selector: 'app-bookmark-dialog',
  templateUrl: 'bookmark-dialog.component.html',
})
export class BookmarkDialog implements OnInit {
  bookmarkedApplications: Application[]

  constructor(private store: Store) {}

  ngOnInit() {
      this.store.pipe(select(selectBookmarkedApplications))
        .subscribe(d => this.bookmarkedApplications = d);
  }

}