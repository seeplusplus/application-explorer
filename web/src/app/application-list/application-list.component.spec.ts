import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { ApplicationListComponent } from './application-list.component';

describe('ApplicationListComponent', applicationListComponentTestSuite);

function applicationListComponentTestSuite() {
  let component: ApplicationListComponent;
  let fixture: ComponentFixture<ApplicationListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        ApplicationListComponent
      ],
      providers: [
        provideMockStore()
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
}