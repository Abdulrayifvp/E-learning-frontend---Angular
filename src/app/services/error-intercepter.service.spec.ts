import { TestBed } from '@angular/core/testing';

import { ErrorIntercepterService } from './error-intercepter.service';

describe('ErrorIntercepterService', () => {
  let service: ErrorIntercepterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErrorIntercepterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
