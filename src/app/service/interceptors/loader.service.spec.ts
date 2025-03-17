import { TestBed } from '@angular/core/testing';

import { LoaderInterceptor } from './loader.service';

describe('LoaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoaderInterceptor = TestBed.get(LoaderInterceptor);
    expect(service).toBeTruthy();
  });
});
