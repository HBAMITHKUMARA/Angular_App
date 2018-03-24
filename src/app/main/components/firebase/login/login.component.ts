import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';

import { AuthService } from '../../../auth/auth.service';
import * as fromAppReducer from '../../../store/app.reducers';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  targetUrl: string;
  testForm: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<fromAppReducer.AppState>,
    private formBuilder: FormBuilder,
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
    this.testFormBuilderInit();
  }

  testFormBuilderInit() {
    this.testForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.minLength(8)]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  signInWithEmailPassword() {
    this.authService.signInWithEmailPassword(this.testForm.value);
  }

  signUpWithEmailPassword() {
    this.authService.signUpWithEmailPassword(this.testForm.value);
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
