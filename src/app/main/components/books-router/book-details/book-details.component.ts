import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

// import { Book } from '../../../shared/models';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit, OnDestroy {
  book: { id: number };
  book1: { id: number, name: string, author: string };
  private subscriptionBookDetailsComponent: Subscription;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getParams();
  }

  getParams() {
    this.book = {
      id: this.route.snapshot.params['id']
    };
    this.subscriptionBookDetailsComponent = this.route.params.subscribe(
      (params: Params) => {
        this.book.id = params['id'];
      }
    );
  }

  // if route has multiple params like books/:id/:name/:author then
  getParams1() {
    this.book1 = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name'],
      author: this.route.snapshot.params['author']
    };
    this.subscriptionBookDetailsComponent = this.route.params.subscribe(
      (params: Params) => {
        this.book1.id = params['id'];
        this.book1.name = params['name'];
        this.book1.author = params['author'];
      }
    );
  }

  editBook(id: number) {
    this.router.navigate(['/books', id, 'edit'], {queryParams: {allowEdit: '1'}, fragment: 'loading'});
  }

  ngOnDestroy(): void {
    this.subscriptionBookDetailsComponent.unsubscribe();
  }

}
