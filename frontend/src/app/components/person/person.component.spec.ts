import { waitForAsync, ComponentFixture, TestBed } from "@angular/core/testing";

import { PersonComponent } from "./person.component";

describe("PersonComponent", () => {
  let component: PersonComponent;
  let fixture: ComponentFixture<PersonComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [PersonComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    (expect(component) as any).toBeTruthy();
  });
});
