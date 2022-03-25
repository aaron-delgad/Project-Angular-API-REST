import { TestBed } from '@angular/core/testing';

import { BusinesService } from './busines.service';

describe('BusinesService', () => {
  let service: BusinesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BusinesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
