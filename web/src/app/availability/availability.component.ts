import { Component, Input } from '@angular/core';
import { Availability } from '../types/availability';

@Component({
  selector: 'app-availability',
  templateUrl: './availability.component.html',
  styleUrls: ['./availability.component.sass']
})
export class AvailabilityComponent {
  @Input()
  availability: Availability;
  readonly days = ['M', 'T', 'W', 'Th', 'F', 'S', 'Su'];

  constructor() { }
}
