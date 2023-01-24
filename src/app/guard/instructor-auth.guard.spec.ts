import { TestBed } from '@angular/core/testing';

import { InstructorAuthGuard } from './instructor-auth.guard';

describe('InstructorAuthGuard', () => {
  let guard: InstructorAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(InstructorAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
