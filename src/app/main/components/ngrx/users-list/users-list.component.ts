import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { Users } from '../../../shared/models';
import * as UsersActions from '../store/users.actions';
import * as fromAppReducer from '../../../store/app.reducers';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  usersState: Observable<{users: Users[]}>;

  constructor(private store: Store<fromAppReducer.AppState>) { }

  ngOnInit() {
    this.usersState = this.store.select('usersReducer');
  }

  onEditUser(id: number) {
    this.store.dispatch(new UsersActions.StartEdit({index: id}));
  }

  deleteUser(id: number) {
    this.store.dispatch(new UsersActions.DeleteUser({index: id}));
  }

}
