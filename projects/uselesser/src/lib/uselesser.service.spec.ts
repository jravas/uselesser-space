import { TestBed } from '@angular/core/testing';

import { UselesserService } from './uselesser.service';

describe('UselesserService', () => {
  let service: UselesserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UselesserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#greeter should return Hello from Test', () => {
    expect(service.greeter('Test')).toBe('Hello from Test');
  })
});
