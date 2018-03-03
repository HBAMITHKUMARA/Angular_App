import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
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

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.getParams();
  }

  getParams() {
    this.book = {
      id: this.route.snapshot.params['id']
    }
    // in case page loads on the same component
    // for example if component on book/1 then you load book/4 on the same component/pages
    // because route.snapshot initializes once per one instance
    this.subscriptionBookDetailsComponent = this.route.params.subscribe(
      (params: Params) => {
        this.book.id = params['id'];
      }
    )
  }

  // if the route has multiple params like books/:id/:name/:author
  getParams1() {
    this.book1 = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name'],
      author: this.route.snapshot.params['author']
    }
  }

  ngOnDestroy(): void {
    this.subscriptionBookDetailsComponent.unsubscribe();
  }

}
