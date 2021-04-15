import { Component, OnInit } from '@angular/core';
import { Application } from '../application';
import { ApplicationsService } from '../applications.service'

@Component({
  selector: 'app-applications-list',
  templateUrl: './applications-list.component.html',
  styleUrls: ['./applications-list.component.sass']
})
export class ApplicationsListComponent implements OnInit {

  public applications: Application[];
  
  public nameSearch: string;

  private filterQuery = () => true;
  
  constructor(private ApplicationsService: ApplicationsService) { }
  ngOnInit(): void {
    this.ApplicationsService.getApplications()
      .subscribe(data => this.applications = data)
  }
  public toggleSorting() {

  }
  public getApplications() {
    return this.applications.filter(this.filterQuery);
  }

  public refreshList() {
    
  }

  public getPositions() {
    return ["Server", "Cook", "Chef"]
    /* return this.Applications
      .map(a => a.position)
      .filter((value, index, self) => self.indexOf(value) === index);*/
  }

}
