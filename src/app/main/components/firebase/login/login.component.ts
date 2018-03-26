import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';

import { AuthService } from '../../../auth/auth.service';
import * as fromAppReducer from '../../../store/app.reducers';
import * as AuthActions from '../../../auth/store/auth.actions';

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
    this.testFormBuilderInit();
  }

  testFormBuilderInit() {
    this.testForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.minLength(8)]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  signInWithEmailPassword() {
    const user: {email: string, password: string} = this.testForm.value;
    this.store.dispatch(new AuthActions.TrySignIn(user));
  }

  signUpWithEmailPassword() {
    const user: {email: string, password: string} = this.testForm.value;
    this.store.dispatch(new AuthActions.TrySignUp(user));
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
