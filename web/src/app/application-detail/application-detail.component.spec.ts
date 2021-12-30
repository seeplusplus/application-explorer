import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatOptionModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, } from '@angular/router';
import { provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';
import { AvailabilityComponent } from '../availability/availability.component';
import { ApplicationMock } from '../types/application.mock';

import { ApplicationDetailComponent } from './application-detail.component';

describe('ApplicationDetailComponent', () => {
  let component: ApplicationDetailComponent;
  let fixture: ComponentFixture<ApplicationDetailComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        MatIconModule,
        MatOptionModule
      ],
      declarations: [
        ApplicationDetailComponent,
        AvailabilityComponent,
     ],
      providers: [
        { provide: ActivatedRoute, useValue: { params: of({ id: 1 })}},
        provideMockStore({
          initialState: {
            applications: [
              ApplicationMock
            ]
          }
        })
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
