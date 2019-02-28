import { TestBed, inject } from '@angular/core/testing';

import { DelegatorServiceService } from './delegator-service.service';

describe('DelegatorServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DelegatorServiceService]
    });
  });

  it('should be created', inject([DelegatorServiceService], (service: DelegatorServiceService) => {
    expect(service).toBeTruthy();
  }));
});
