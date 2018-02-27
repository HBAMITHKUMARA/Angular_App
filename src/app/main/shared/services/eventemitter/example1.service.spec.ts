import { TestBed, inject } from '@angular/core/testing';

import { Example1Service } from './example1.service';

describe('Example1Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Example1Service]
    });
  });

  it('should be created', inject([Example1Service], (service: Example1Service) => {
    expect(service).toBeTruthy();
  }));
});
