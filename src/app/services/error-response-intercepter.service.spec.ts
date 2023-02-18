import { TestBed } from '@angular/core/testing';

import { ErrorResponseIntercepterService } from './error-response-intercepter.service';

describe('ErrorResponseIntercepterService', () => {
  let service: ErrorResponseIntercepterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErrorResponseIntercepterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
