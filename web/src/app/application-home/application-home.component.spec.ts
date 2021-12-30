import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgControl, ReactiveFormsModule } from '@angular/forms';
import { MatOptionModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';
import { ApplicationListComponent } from '../application-list/application-list.component';
import { ApplicationsService } from '../applications.service';
import { DayNamePipe } from '../day-name.pipe';
import { ApplicationMock } from '../types/application.mock';

import { ApplicationHomeComponent } from './application-home.component';

describe('ApplicationHomeComponent', () => {
  let component: ApplicationHomeComponent;
  let fixture: ComponentFixture<ApplicationHomeComponent>;

  const applicationsServiceMock = jasmine.createSpyObj<ApplicationsService>('ApplicationsService', ['getApplications']);
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        DayNamePipe,
        ApplicationHomeComponent,
        ApplicationListComponent
      ],
      imports: [
        MatIconModule,
        MatDialogModule,
        MatOptionModule,
        MatSelectModule,
        MatFormFieldModule,
        MatInputModule,
        NoopAnimationsModule,
        ReactiveFormsModule,
      ],
      providers: [
        NgControl,
        { provide: ApplicationsService, useValue: applicationsServiceMock},
        provideMockStore()
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    applicationsServiceMock.getApplications.and.returnValue(of([ApplicationMock]));
    fixture = TestBed.createComponent(ApplicationHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
