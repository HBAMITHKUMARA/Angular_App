import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';

import { AuthService } from '../../../auth/auth.service';
import * as fromAppReducer from '../../../store/app.reducers';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  targetUrl: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<fromAppReducer.AppState>
  ) { }

  ngOnInit() {
    this.targetUrl = this.route.snapshot.queryParams['targetUrl'];
    this.store.select('authReducer')
    .subscribe(
      (auth) => {
        if (auth.authenticated) {
          this.router.navigateByUrl(this.targetUrl);
        }
      }
    );
  }

  signInWithGoogle() {
    this.authService.signInWithGoogle();
  }

  signInWithGithub() {
    this.authService.signInWithGithub();
  }

  signInWithTwitter() {
    this.authService.signInWithTwitter();
  }

  signInWithFacebook() {
    this.authService.signInWithFacebook();
  }

}
