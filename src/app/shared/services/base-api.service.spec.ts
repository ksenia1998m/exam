import { TestBed } from '@angular/core/testing';

import { BaseApiService } from './base-api.service';

describe('BaseAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BaseApiService = TestBed.get(BaseApiService);
    expect(service).toBeTruthy();
  });
});
