import { waitForAsync, ComponentFixture, TestBed } from "@angular/core/testing";

import { LecturesTableComponent } from "./lectures-table.component";

describe("LecturesTableComponent", () => {
  let component: LecturesTableComponent;
  let fixture: ComponentFixture<LecturesTableComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [LecturesTableComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LecturesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    (expect(component) as any).toBeTruthy();
  });
});
