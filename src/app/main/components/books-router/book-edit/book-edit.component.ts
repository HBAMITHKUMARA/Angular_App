import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

import { BookService } from '../../../shared/services';
import { Book } from '../../../shared/models';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  book: Observable<Book>;
  id: number;
  test: any;

  constructor(private bookService: BookService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.getParams();
    this.populateBookEditComponent();
    this.getParams114().subscribe(
      (res) => {
        this.test = res;
      }
    );
  }

  populateBookEditComponent() {
    this.bookService.getBook(1).subscribe(
      (res) => {
        this.book = res;
        console.log('res:  ', res);
      }
    );
    console.log('book:  ', this.book);
  }

  // not able to implement with bookService
  getParams114(): Observable<number> {
    return new Observable.create(
      (observer) => {
        let id = this.route.snapshot.params['id'];
        this.route.params.subscribe(
          (params: Params) => {
            id = params['id'];
          }
        );
        observer.next(id);
      }
    );
  }

  getParams() {
    this.id = this.route.snapshot.params['id'];
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
      }
    );
    console.log('id:  ', this.id);
  }

}
