import { TestBed } from "@angular/core/testing";

import { GradesService } from "./grades.service";

describe("GradesService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: GradesService = TestBed.inject(GradesService);
    (expect(service) as any).toBeTruthy();
  });
});
