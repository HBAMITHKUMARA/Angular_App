import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

import { ApiService } from '../../../shared/services';
import { Book } from '../../../shared/models';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit, OnDestroy {
  loadingBooksComponent: boolean = true;
  errorBooksComponent: boolean = false;
  private subscription: Subscription;
  books: Observable<Book[]>;

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit() {
    this.populateBooks();
  }

  populateBooks() {
    this.subscription = this.apiService
    .get('./assets/data/books.json', new HttpParams())
    .subscribe(
      (res) => {
        this.books = res;
        this.loadingBooksComponent = false;
        this.errorBooksComponent = false;
      },
      (error) => {
        this.loadingBooksComponent = false;
        this.errorBooksComponent = true;
        console.log('error in retrieving books data');
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
