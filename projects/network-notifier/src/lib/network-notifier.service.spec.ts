import { TestBed } from '@angular/core/testing';

import { NetworkNotifierService } from './network-notifier.service';

describe('NetworkNotifierService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NetworkNotifierService = TestBed.get(NetworkNotifierService);
    expect(service).toBeTruthy();
  });
});
