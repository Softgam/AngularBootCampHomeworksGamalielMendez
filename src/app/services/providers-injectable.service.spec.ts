import { TestBed } from '@angular/core/testing';

import { ProvidersInjectableService } from './providers-injectable.service';

describe('ProvidersInjectableService', () => {
  let service: ProvidersInjectableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProvidersInjectableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
