import { TestBed } from '@angular/core/testing';

import { BuProgressBarDataService } from './bu-progress-bar-data.service';

describe('BuProgressBarDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BuProgressBarDataService = TestBed.get(BuProgressBarDataService);
    expect(service).toBeTruthy();
  });
});
