import { waitForAsync, ComponentFixture, TestBed } from "@angular/core/testing";

import { ScheduleComponent } from "./schedule.component";

describe("ScheduleComponent", () => {
  let component: ScheduleComponent;
  let fixture: ComponentFixture<ScheduleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ScheduleComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    (expect(component) as any).toBeTruthy();
  });
});
