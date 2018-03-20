import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Store } from '@ngrx/store';

import * as fromAppReducer from '../store/app.reducers';
import * as fromAuthActions from '../auth/store/auth.actions';

@Injectable()
export class AuthService implements OnInit {
  private user: Observable<firebase.User>;
  private userDetails: firebase.User = null;

  constructor(private firebaseAuth: AngularFireAuth,
              private router: Router,
              private store: Store<fromAppReducer.AppState>) {
    this.user = firebaseAuth.authState;
    this.user.subscribe(
      (user) => {
        if (user) {
          this.userDetails = user;
          this.store.dispatch(new fromAuthActions.SignIn());
          let tokenId = '';
          user.getIdToken().then((res) => tokenId = res);
          this.store.dispatch(new fromAuthActions.SetToken({token: tokenId}));
          console.log('user:  ', user);
          console.log('userDetails:  ', this.userDetails);
        } else {
          this.userDetails = null;
        }
      }
    );
  }

  ngOnInit() {
  }

  signInWithGoogle() {
    this.firebaseAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    ).then(
      (auth) => {
        this.store.dispatch(new fromAuthActions.SignIn());
        this.store.dispatch(new fromAuthActions.SetToken({token: auth.token}));
      }
    );
  }

  signInWithGithub() {
    return this.firebaseAuth.auth.signInWithPopup(
      new firebase.auth.GithubAuthProvider()
    );
  }

  signInWithTwitter() {
    return this.firebaseAuth.auth.signInWithPopup(
      new firebase.auth.TwitterAuthProvider()
    );
  }

  signInWithFacebook() {
    return this.firebaseAuth.auth.signInWithPopup(
      new firebase.auth.FacebookAuthProvider()
    );
  }

  isLoggedIn() {
    return this.user;
  }

  logout() {
    this.firebaseAuth.auth.signOut()
    .then((res) => this.router.navigate(['/']));
    this.store.dispatch(new fromAuthActions.SignOut());
  }
}
