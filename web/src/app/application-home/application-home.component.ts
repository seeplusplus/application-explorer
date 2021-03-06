import { isPlatformServer } from '@angular/common';
import { Component, Inject, OnInit, Optional, PLATFORM_ID } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatDialog } from '@angular/material/dialog';
import { select, Store } from '@ngrx/store';
import { ApplicationsService } from '../applications.service';
import { BookmarkDialogComponent } from '../dialog/bookmark-dialog.component';
import { selectSavedApplications } from '../selector/application.selectors';
import { retrievedApplications } from '../state/application.actions';
import { Application } from '../types/application';
import { Days } from '../types/availability';
@Component({
  selector: 'app-application-home',
  templateUrl: './application-home.component.html',
  styleUrls: ['./application-home.component.sass']
})

export class ApplicationHomeComponent implements OnInit {
  days = Days;

  applications: Application[];
  displayApplications: Application[];

  sortAscending = true;
  orderByValue = new FormControl('name');
  selectedPositions = new FormControl([]);
  selectedDays = new FormControl([]);
  nameSearch = new FormControl('');
  filterOnSaved = false;

  constructor(
    private applicationsService: ApplicationsService,
    private dialog: MatDialog,
    @Inject(PLATFORM_ID) private platformId: any,
    @Optional() private store: Store,
  ) { }

  ngOnInit(): void {
    if (isPlatformServer(this.platformId)) {
      return;
    }
    this.applicationsService.getApplications()
      .subscribe(data => {
        this.applications = data;
        this.displayApplications = this.applications;
        this.store.dispatch(retrievedApplications({ applications: data }));
      });
  }

  public toggleSorting(): void {
    this.sortAscending = !this.sortAscending;
    this.refreshList();
  }
  public toggleSavedOnly(event: MatCheckboxChange): void {
    this.filterOnSaved = event.checked;
    this.refreshList();
  }

  public getPositions(): string[] {
    return ['Server', 'Cook', 'Chef'];
  }

  public refreshList(): void {
    this.displayApplications = this.applications
      .filter(value => {
        return value.name.toLowerCase().match(this.nameSearch.value.toLowerCase())
        && (this.selectedPositions.value.length === 0 || this.selectedPositions.value.indexOf(value.position) >= 0)
        && (this.selectedDays.value.length === 0 || this.selectedDays.value.every((d) => value.availability[d] > 0))
        && (!this.filterOnSaved || this.applicationIsSaved(value.id));
      });

    const sortFactor = (this.sortAscending) ? -1 : 1;

    this.displayApplications.sort((a, b) => {
      if (a[this.orderByValue.value] > b[this.orderByValue.value]) {
        return sortFactor;
      }
      else if (a[this.orderByValue.value] < b[this.orderByValue.value]) {
        return -1 * sortFactor;
 }
      else {
        return 0;
 }
    });
  }

  public openBookmarks(): void {
    this.dialog.open(BookmarkDialogComponent);
  }

  private applicationIsSaved(applicationId: number): boolean {
    let isSaved = false;

    this.store.pipe(select(selectSavedApplications))
      .subscribe(a => isSaved = a.filter(ap => ap.id === applicationId).length > 0);

    return isSaved;
  }
}
