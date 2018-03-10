import { TestBed, inject } from '@angular/core/testing';

import { BooksAuthGuardService } from './books-auth-guard.service';

describe('BooksAuthGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BooksAuthGuardService]
    });
  });

  it('should be created', inject([BooksAuthGuardService], (service: BooksAuthGuardService) => {
    expect(service).toBeTruthy();
  }));
});
