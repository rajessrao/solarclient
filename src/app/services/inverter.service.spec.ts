import { TestBed, inject } from '@angular/core/testing';

import { InverterService } from './inverter.service';

describe('InverterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InverterService]
    });
  });

  it('should be created', inject([InverterService], (service: InverterService) => {
    expect(service).toBeTruthy();
  }));
});
