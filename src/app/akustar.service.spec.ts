import { TestBed } from '@angular/core/testing';

import { AkustarService } from './akustar.service';

describe('AkustarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AkustarService = TestBed.get(AkustarService);
    expect(service).toBeTruthy();
  });
});
