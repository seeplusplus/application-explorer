import { Component,  OnInit } from '@angular/core';
import { Application } from '../application';
import { ApplicationsService } from '../applications.service'
import { Days } from "../availability";
import {FormControl} from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';
import { Store, select } from "@ngrx/store";
import { retrievedApplications } from "../state/application.actions";
import { selectBookmarkedApplications, selectSavedApplications } from "../selector/application.selectors";
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { BookmarkDialog } from '../dialog/bookmark-dialog.component';
import { MatCheckboxChange } from '@angular/material/checkbox';
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
  orderByValue = new FormControl("name");
  selectedPositions = new FormControl([]);
  selectedDays = new FormControl([]);
  nameSearch = new FormControl("");
  filterOnSaved = false;

  constructor(private ApplicationsService: ApplicationsService,
    private store: Store,
    private dialog: MatDialog) { }
  
  ngOnInit(): void {
    this.ApplicationsService.getApplications()
      .subscribe(data => { 
        this.applications = data;
        this.displayApplications = this.applications;
        this.store.dispatch(retrievedApplications({ applications: data }));
      });
  }

  public toggleSorting() {
    this.sortAscending = !this.sortAscending;
    this.refreshList()
  }
  public toggleSavedOnly(event: MatCheckboxChange) {
    this.filterOnSaved = event.checked;
    this.refreshList()
  }

  public getPositions() {
    return ["Server", "Cook", "Chef"]
  }
  public refreshList() {
    this.displayApplications = this.applications
      .filter(value => {
        return value.name.toLowerCase().match(this.nameSearch.value.toLowerCase())
        && (this.selectedPositions.value.length === 0 || this.selectedPositions.value.indexOf(value.position) >= 0)
        && (this.selectedDays.value.length === 0 || this.selectedDays.value.every((d) => value.availability[d] > 0))
        && (!this.filterOnSaved || this.applicationIsSaved(value.id))
      });
    
    let sortFactor = (this.sortAscending) ? -1 : 1;

    this.displayApplications.sort((a, b) => {
      if (a[this.orderByValue.value] > b[this.orderByValue.value])
        return sortFactor;
      else if (a[this.orderByValue.value] < b[this.orderByValue.value])
        return -1 * sortFactor;
      else
        return 0;
    });
  }

  public openBookmarks() {
    this.dialog.open(BookmarkDialog)
  }

  private applicationIsSaved(applicationId: number): boolean {
    let isSaved = false;

    this.store.pipe(select(selectSavedApplications))
      .subscribe(a => isSaved = a.filter(ap => ap.id === applicationId).length > 0);

    return isSaved;
  }
}
