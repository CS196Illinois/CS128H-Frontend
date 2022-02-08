import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HofComponent } from './hof.component';

describe('HofComponent', () => {
  let component: HofComponent;
  let fixture: ComponentFixture<HofComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HofComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
