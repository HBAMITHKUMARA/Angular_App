import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

import { ApiService } from '../../../shared/services';
import { Book } from '../../../shared/models';
import { AuthService } from '../../../auth/auth.service';

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
    private authService: AuthService) { }

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

  onLogin() {
    this.authService.login();
  }

  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
