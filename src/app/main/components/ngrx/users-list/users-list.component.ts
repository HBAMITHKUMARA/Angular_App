import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { Users } from '../../../shared/models';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  usersState: Observable<{users: Users[]}>;

  constructor(private store: Store<{usersReducer: {users: Users[]}}>) { }

  ngOnInit() {
    this.usersState = this.store.select('usersReducer');
  }

}
