import { TestBed } from '@angular/core/testing';

import { InfoPainaService } from './info-paina.service';

describe('InfoPainaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InfoPainaService = TestBed.get(InfoPainaService);
    expect(service).toBeTruthy();
  });
});
