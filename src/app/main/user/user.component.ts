import { Component, OnInit } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import 'rxjs/Observable';

import { CommonService } from '../services';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  loadingUserComponent = true;
  user = {};
  payment = {};

  constructor(private commonService: CommonService) { }

  ngOnInit() {
    // retrieving data from server with seperate Observable
    // this.getUser();
    // this.getPayment();

    // retrieving data from server with Observable forkedjoin
    this.populate();
  }

  populate() {
    Observable.forkJoin(
      this.commonService.query('./assets/data/user.json', new HttpParams, 'user'),
      this.commonService.query('./assets/data/user.json', new HttpParams, 'payment')
    ).subscribe(
      (res) => {
        this.user = res[0];
        this.payment = res[1];
        this.loadingUserComponent = false;
      },
      (error) => { console.log('error in retrieving data from the server', error); }
      );
  }

  getUser() {
    this.commonService.query('./assets/data/user.json', new HttpParams, 'user')
      .subscribe(
        (res) => { this.user = res; this.loadingUserComponent = false; },
        (error) => { console.log('error in retriving user data:  ', error); }
      );
  }

  getPayment() {
    this.commonService.query('./assets/data/user.json', new HttpParams, 'payment')
    .subscribe(
      (res) => { this.payment = res; this.loadingUserComponent = false; },
      (error) => { console.log('error in retriving payment data:  ', error); }
    );
  }

}
