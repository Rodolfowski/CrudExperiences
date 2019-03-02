import { TestBed } from '@angular/core/testing';

import { EmployedService } from './employed.service';

describe('EmployedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmployedService = TestBed.get(EmployedService);
    expect(service).toBeTruthy();
  });
});
