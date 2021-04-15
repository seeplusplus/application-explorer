import { Component,  OnInit } from '@angular/core';
import { Application } from '../application';
import { ApplicationsService } from '../applications.service'

import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-application-home',
  templateUrl: './application-home.component.html',
  styleUrls: ['./application-home.component.sass']
})
export class ApplicationHomeComponent implements OnInit {

  positionSelector = new FormControl();
  orderByValue = "name";
  sortAscending = true;
  applications: Application[];
  displayApplications: Application[];
  nameSearch: string;
  filterQuery = () => true;
  
  constructor(private ApplicationsService: ApplicationsService) { }
  
  ngOnInit(): void {
    this.ApplicationsService.getApplications()
      .subscribe(data => { 
        this.applications = data;
        this.displayApplications = this.applications;
      });
  }

  public toggleSorting() {
    this.sortAscending = !this.sortAscending;
    this.refreshList()
  }

  public getApplications() {
    return this.applications.filter(this.filterQuery);
  }
  public filterByName(name: string) {
    this.displayApplications = this.applications
      .filter((value) => value.name.toLowerCase().match(name.toLowerCase()));
  }
  public refreshList() {
    let sortFactor = (this.sortAscending) ? -1 : 1;
    this.displayApplications.sort((a, b) => {
      if (a[this.orderByValue] > b[this.orderByValue])
        return sortFactor;
      else if (a[this.orderByValue] < b[this.orderByValue])
        return -1 * sortFactor;
      else
        return 0;
    });
  }

  public getPositions() {
    return ["Server", "Cook", "Chef"]
    /* return this.Applications
      .map(a => a.position)
      .filter((value, index, self) => self.indexOf(value) === index);*/
  }
}
