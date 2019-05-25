import { TestBed } from '@angular/core/testing';

import { SwService } from './sw.service';

describe('SwService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SwService = TestBed.get(SwService);
    expect(service).toBeTruthy();
  });
});
