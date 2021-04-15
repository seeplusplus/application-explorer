import { Component, Input, OnInit } from '@angular/core';
import { Availability } from '../availability';
@Component({
  selector: 'app-availability',
  templateUrl: './availability.component.html',
  styleUrls: ['./availability.component.sass']
})
export class AvailabilityComponent implements OnInit {
  @Input()
  availability: Availability;
  days = ['M', 'T', 'W', 'Th', 'F', 'S', 'Su'];
  
  constructor() { }

  ngOnInit(): void {
  }

}
