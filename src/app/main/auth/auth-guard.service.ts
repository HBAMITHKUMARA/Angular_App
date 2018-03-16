import { Injectable, OnInit } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthService } from '../auth/auth.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class AuthGuard implements OnInit, CanActivate {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    this.authService.authenticated.subscribe(
      (res: boolean) => {
        if (res === true) {
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
