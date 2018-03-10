import { TestBed, inject } from '@angular/core/testing';

import { BooksAuthService } from './books-auth.service';

describe('BooksAuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BooksAuthService]
    });
  });

  it('should be created', inject([BooksAuthService], (service: BooksAuthService) => {
    expect(service).toBeTruthy();
  }));
});
