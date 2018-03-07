import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CanComponentDeactivate } from './can-deactivate-guard.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-book-edit-sub',
  templateUrl: './book-edit-sub.component.html',
  styleUrls: ['./book-edit-sub.component.css']
})
export class BookEditSubComponent implements OnInit, CanComponentDeactivate {
  changesSaved = false;
  allowEdit: boolean;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getParams();
  }

  onUpdate() {
    this.changesSaved = true;
    // this.router.navigate(['../'], { relativeTo: this.route});
  }

  getParams() {
    this.route.queryParams.subscribe(
      (queryParams: Params) => {
        this.allowEdit = queryParams['allowEdit'] === '1' ? true : false;
        // console.log('queryParams:  ', queryParams['allowEdit']);
      }
    );
  }

  canDeactivate(): boolean | Observable<boolean> | Promise<boolean> {
    if (!this.allowEdit) {
      return true;
    }
    if (this.changesSaved) {
      return true;
    } else {
      return confirm('Do you want to discard the changes?');
    }
  }

}
