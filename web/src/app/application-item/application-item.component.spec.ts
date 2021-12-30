import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { provideMockStore } from '@ngrx/store/testing';
import { AvailabilityComponent } from '../availability/availability.component';
import { ApplicationMock } from '../types/application.mock';

import { ApplicationItemComponent } from './application-item.component';

describe('ApplicationItemComponent', () => {
  let component: ApplicationItemComponent;
  let fixture: ComponentFixture<ApplicationItemComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        ApplicationItemComponent,
        AvailabilityComponent
      ],
      imports: [
        MatIconModule
      ],
      providers: [
        provideMockStore({
          initialState: {
            applications: [
              ApplicationMock
            ],
            savedForLater: [ 1 ],
            bookmarks: [ 1 ]
          }
        })
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationItemComponent);
    component = fixture.componentInstance;
    component.application = ApplicationMock;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
