import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  id: number;
  allowEdit: boolean;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getParams();
  }

  getParams() {
    // console.log(this.route.snapshot.params['id']);
    // console.log(this.route.snapshot.queryParams['allowEdit']);
    // console.log(this.route.snapshot.fragment);

    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
        // console.log('params:  ', params);
      }
    );

    this.route.queryParams.subscribe(
      (queryParams: Params) => {
        this.allowEdit = queryParams['allowEdit'] === '1' ? true : false;
        // console.log('queryParams:  ', queryParams['allowEdit']);
      }
    );

    this.route.fragment.subscribe(
      (fragment) => {
        // console.log('fragment:  ', fragment);
      }
    );
  }

  onSubEdit() {
    this.router.navigate(['sub'], { relativeTo: this.route, queryParamsHandling: 'preserve' });
  }

}
