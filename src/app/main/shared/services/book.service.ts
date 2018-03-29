import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

import { ApiService } from './api.service';
import { Book } from '../models';

@Injectable()
export class BookService {

  constructor(private apiService: ApiService) { }

  getBooks(): Observable<Book[]> {
    return this.apiService.get('./assets/data/books.json', new HttpParams());
  }

  getBook(id: number): Observable<Book> {
    const params = new HttpParams().set('auth', 'token');
    return this.apiService.get('./assets/data/books.json', params)
    .map(
      (books) => {
        return books.find((book) => {
          return book.id === id;
        });
      }
    )
    .catch(
      (error: any) => Observable.throw(error.json().error || 'Server error')
    );
  }

}
