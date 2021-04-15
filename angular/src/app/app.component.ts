import { Component, OnInit } from '@angular/core';
import { Application } from './application';
import { ApplicationsService } from './applications.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'angular';

  public Applications: Application[];
  
  
  constructor(private ApplicationsService: ApplicationsService) { }
  ngOnInit(): void {
    
    this.ApplicationsService.getApplications()
      .subscribe(data => this.Applications = data);
  }
}
