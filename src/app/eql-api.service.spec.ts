import { TestBed } from '@angular/core/testing';

import { EqlApiService } from './eql-api.service';

describe('EqlApiService', () => {
  let service: EqlApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EqlApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
