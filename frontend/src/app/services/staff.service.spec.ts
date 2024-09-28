import { TestBed } from "@angular/core/testing";

import { StaffService } from "./staff.service";

describe("StaffService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: StaffService = TestBed.inject(StaffService);
    expect(service).toBeTruthy();
  });
});
