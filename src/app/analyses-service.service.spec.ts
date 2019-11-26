import { TestBed } from '@angular/core/testing';

import { AnalysesServiceService } from './analyses-service.service';

describe('AnalysesServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnalysesServiceService = TestBed.get(AnalysesServiceService);
    expect(service).toBeTruthy();
  });
});
