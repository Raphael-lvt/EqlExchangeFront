import { TestBed } from '@angular/core/testing';

import { TradeOrderService } from './trade-order.service';

describe('TradeOrderService', () => {
  let service: TradeOrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TradeOrderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
