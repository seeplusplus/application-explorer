import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ApplicationItemComponent } from './application-item.component';

describe('ApplicationItemComponent', () => {
  let component: ApplicationItemComponent;
  let fixture: ComponentFixture<ApplicationItemComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
