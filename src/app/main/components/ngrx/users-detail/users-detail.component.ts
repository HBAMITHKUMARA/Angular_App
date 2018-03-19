import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { UsersService } from '../users.service';
import { Users } from '../../../shared/models';
import * as UsersReducer from '../store/users.reducers';
import * as UsersActions from '../store/users.actions';

@Component({
  selector: 'app-users-detail',
  templateUrl: './users-detail.component.html',
  styleUrls: ['./users-detail.component.css']
})
export class UsersDetailComponent implements OnInit {
  id: number;
  user: Observable<Users>;

  constructor(private route: ActivatedRoute,
              private usersService: UsersService,
              private store: Store<UsersReducer.AppState>) { }

  ngOnInit() {
    this.route.params
    .subscribe((params: Params) => {
      this.id = +params['id'];
      this.user = this.usersService.getUser(this.id);
    });
  }

  isObject(data: any) {
    return typeof data === 'object';
  }

  onEditUser() {
    this.store.dispatch(new UsersActions.StartEdit({index: this.id}));
  }

}
