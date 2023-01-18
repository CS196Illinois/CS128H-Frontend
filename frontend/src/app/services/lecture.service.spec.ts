import { TestBed } from '@angular/core/testing';

import { LectureService } from './lecture.service';

describe('LectureService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LectureService = TestBed.get(LectureService);
    expect(service).toBeTruthy();
  });
});
