import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

import { ApiService } from '../../../shared/services';
import { Book } from '../../../shared/models';
import { BooksAuthService } from '../../../auth/books-auth.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit, OnDestroy {
  loadingBooksComponent = true;
  errorBooksComponent = false;
  private subscription: Subscription;
  books: Observable<Book[]>;

  constructor(
    private apiService: ApiService,
    private router: Router,
    private booksAuthService: BooksAuthService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.populateBooks();
  }

  populateBooks() {
    // conventional method
    // this.subscription = this.apiService
    // .get('./assets/data/books.json', new HttpParams())
    // .subscribe(
    //   (res) => {
    //     this.books = res;
    //     this.loadingBooksComponent = false;
    //     this.errorBooksComponent = false;
    //   },
    //   (error) => {
    //     this.loadingBooksComponent = false;
    //     this.errorBooksComponent = true;
    //     console.log('error in retrieving books data');
    //   }
    // );

    // resolver method
    this.route.data.subscribe((res) => this.books = res['books']);
  }

  onLogin() {
    this.booksAuthService.login();
  }

  onLogout() {
    this.booksAuthService.logout();
  }

  ngOnDestroy(): void {
    // this.subscription.unsubscribe();
  }

}
