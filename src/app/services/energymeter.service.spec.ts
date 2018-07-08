import { TestBed, inject } from '@angular/core/testing';

import { EnergymeterService } from './energymeter.service';

describe('EnergymeterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EnergymeterService]
    });
  });

  it('should be created', inject([EnergymeterService], (service: EnergymeterService) => {
    expect(service).toBeTruthy();
  }));
});
