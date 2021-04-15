import { Component, Input, OnInit } from '@angular/core';
import { Application } from '../application';


@Component({
  selector: 'app-application-list',
  templateUrl: './application-list.component.html',
  styleUrls: ['./application-list.component.sass']
})
export class ApplicationListComponent implements OnInit {
  @Input()
  applications: Application[];

  ngOnInit(): void {

  }

}
