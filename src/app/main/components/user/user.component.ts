import { Component, OnInit } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
import { Store } from '@ngrx/store';

import { CommonService } from '../../shared/services';
import { UserLazy } from '../../shared/models';
import * as fromUserReducer from './store/user-lazy.reducer';
import * as fromUserAction from './store/user-lazy.actions';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  // loadingUserComponent = true;
  // user = {};
  // payment = {};
  // contact = {};
  userState: any;

  constructor(private commonService: CommonService,
              private store: Store<fromUserReducer.FeatureState>) { }

  ngOnInit() {
    // retrieving data from server with seperate Observable
    // this.getUser();
    // this.getPayment();

    // retrieving data from server with Observable forkedjoin
    // this.populate();
    this.store.dispatch(new fromUserAction.LoadUser());
    this.userState = this.store.select('user');
  }

  // populate() {
  //   Observable.forkJoin(
  //     this.commonService.query('./assets/data/user.json', new HttpParams, 'user'),
  //     this.commonService.query('./assets/data/user.json', new HttpParams, 'payment'),
  //     this.commonService.query('./assets/data/user.json', new HttpParams, 'contact')
  //   ).subscribe(
  //     (res) => {
  //       this.user = res[0];
  //       this.payment = res[1];
  //       this.contact = res[2];
  //       this.loadingUserComponent = false;
  //     },
  //     (error) => { console.log('error in retrieving data from the server', error); }
  //     );
  // }

  // getUser() {
  //   this.commonService.query('./assets/data/user.json', new HttpParams, 'user')
  //     .subscribe(
  //       (res) => { this.user = res; this.loadingUserComponent = false; },
  //       (error) => { console.log('error in retriving user data:  ', error); }
  //     );
  // }

  // getPayment() {
  //   this.commonService.query('./assets/data/user.json', new HttpParams, 'payment')
  //   .subscribe(
  //     (res) => { this.payment = res; this.loadingUserComponent = false; },
  //     (error) => { console.log('error in retriving payment data:  ', error); }
  //   );
  // }

}
