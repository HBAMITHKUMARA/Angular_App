import { Injectable, OnInit } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { Store } from '@ngrx/store';

import { AuthService } from '../auth/auth.service';
import * as fromAppReducer from '../store/app.reducers';
import * as fromAuthReducer from '../auth/store/auth.reducers';

@Injectable()
export class AuthGuard implements OnInit, CanActivate {

  constructor(private router: Router,
              private authService: AuthService,
              private store: Store<fromAppReducer.AppState>) { }

  ngOnInit() {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return this.store.select('authReducer').map(
      (authState: fromAuthReducer.State) => {
        if (!authState.authenticated) {
          this.router.navigate(['/login'], { queryParams: { targetUrl: state.url }});
        }
        return authState.authenticated;
      }
    );
  }

}
