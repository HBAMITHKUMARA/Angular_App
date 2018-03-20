import { Injectable, OnInit } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { Store } from '@ngrx/store';

import { AuthService } from '../auth/auth.service';
import * as fromAppReducer from '../store/app.reducers';
import * as fromAuthReducer from '../auth/store/auth.actions';

@Injectable()
export class AuthGuard implements OnInit, CanActivate {

  constructor(private router: Router,
              private authService: AuthService,
              private store: Store<fromAppReducer.AppState>) { }

  ngOnInit() {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    this.store.select('authReducer').subscribe(
      (res) => {
        if (res.authenticated === true) {
          return true;
        }
      }
    );

    console.log('isloggedIn:  ', this.authService.isLoggedIn());

    return this.authService.isLoggedIn()
    .take(1)
    .map(user => !!user)
    .do(loggedIn => {
      if (!loggedIn) {
        console.log('access denied');
        this.router.navigate(['/login'], { queryParams: { targetUrl: state.url }});
      }
    });

  }

}
