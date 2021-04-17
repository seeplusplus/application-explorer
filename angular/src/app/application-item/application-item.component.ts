import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { Application } from '../application';


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
  
  constructor() { }

  ngOnInit(): void { }

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
