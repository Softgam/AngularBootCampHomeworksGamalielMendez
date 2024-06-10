import { TestBed } from '@angular/core/testing';

import { InjectableRootService } from './injectable-root.service';

describe('InjectableRootService', () => {
  let service: InjectableRootService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InjectableRootService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
