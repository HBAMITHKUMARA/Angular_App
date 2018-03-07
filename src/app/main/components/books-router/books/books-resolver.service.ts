import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Book } from '../../../shared/models';
import { BookService } from '../../../shared/services';

@Injectable()
export class BooksResolverService implements Resolve<Book[]> {

  constructor(private bookService: BookService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Book[] | Observable<Book[]> | Promise<Book[]> {
    return this.bookService.getBooks();
  }

}
