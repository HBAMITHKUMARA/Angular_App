import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Users } from '../../../shared/models';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users: Observable<Users[]>;
  // user: Observable<Users>;

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.users = this.usersService.getUsers();
    // console.log('users:  ', this.users);
    // this.user = this.usersService.getBook(1);
  }

}
