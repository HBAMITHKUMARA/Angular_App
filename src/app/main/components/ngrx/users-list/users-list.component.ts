import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { Users } from '../../../shared/models';
import * as UsersActions from '../store/users.actions';
import * as fromUserReducer from '../store/users.reducers';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  usersState: Observable<{users: Users[]}>;

  constructor(private store: Store<fromUserReducer.AppState>) { }

  ngOnInit() {
    this.usersState = this.store.select('usersReducer');
  }

  deleteUser(data: any) {
    this.store.dispatch(new UsersActions.DeleteUser({index: data.id}));
  }

}
