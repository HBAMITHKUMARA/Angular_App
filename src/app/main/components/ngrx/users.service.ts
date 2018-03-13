import { Injectable, OnInit } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { ApiService } from '../../shared/services';
import { Users } from '../../shared/models';

@Injectable()
export class UsersService {
  users: Observable<Users[]>;

  constructor(private apiService: ApiService) {
    this.loadUsers();
  }

  loadUsers() {
    this.users = this.apiService.get('./assets/data/users.json', new HttpParams());
  }

  getUsers(): Observable<Users[]> {
    return this.users;
  }

  getUser(id: number): Observable<Users> {
    return this.users.map((users) => {
      return users.find(user => user.id === id);
    });
  }

}
