import { Component, Input, OnInit } from '@angular/core';
import { Availability } from '../availability';
@Component({
  selector: 'app-availability',
  templateUrl: './availability.component.html',
  styleUrls: ['./availability.component.sass']
})
export class AvailabilityComponent implements OnInit {
  @Input()
  public availability: Availability;

  constructor() { }

  ngOnInit(): void {
    console.log(this.availability);
  }

}
