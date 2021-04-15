import { Component, Input, OnInit } from '@angular/core';
import { Application } from '../application';


@Component({
  selector: 'app-application-item',
  templateUrl: './application-item.component.html',
  styleUrls: ['./application-item.component.sass']
})


export class ApplicationItemComponent implements OnInit {
  @Input ()
  application: Application;
  savedForLater = false
  isBookmarked = false
  
  constructor() { }

  ngOnInit(): void { }
}
