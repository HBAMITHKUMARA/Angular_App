import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { ApiService } from '../../shared/services';
import { Users } from '../../shared/models';

@Injectable()
export class UsersService {

  constructor(private apiService: ApiService) { }

  getBooks(): Observable<Users[]> {
    return this.apiService.get('./assets/data/users.json', new HttpParams());
  }

  getBook(id: number): Observable<Users> {
    return this.getBooks().map((users) => {
      return users.find(user => user.id === id);
    });
  }

}
