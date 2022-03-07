import { TestBed } from '@angular/core/testing';

import { DataExchangerService } from './data-exchanger.service';

describe('DataExchangerService', () => {
  let service: DataExchangerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataExchangerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
