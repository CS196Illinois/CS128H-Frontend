import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffProfileDashboardComponent } from './staff-profile-dashboard.component';

describe('StaffProfileDashboardComponent', () => {
  let component: StaffProfileDashboardComponent;
  let fixture: ComponentFixture<StaffProfileDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffProfileDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffProfileDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
