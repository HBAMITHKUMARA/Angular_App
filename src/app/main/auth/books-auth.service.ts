import { Injectable } from '@angular/core';

@Injectable()
export class BooksAuthService {
  loggedIn = false;

  constructor() { }

  isAuthenticated() {
    const promise = new Promise(
      (resolve, reject) => {
        setTimeout(() => { resolve(this.loggedIn); }, 800);
      }
    );
    return promise;
  }

  login() {
    this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
  }

}
