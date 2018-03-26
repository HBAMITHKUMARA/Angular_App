import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Store } from '@ngrx/store';

import * as fromAppReducer from '../store/app.reducers';
import * as fromAuthActions from '../auth/store/auth.actions';

@Injectable()
export class AuthService implements OnInit {
  private user: Observable<firebase.User>;
  private userDetails: firebase.User = null;

  constructor(private angularFireAuth: AngularFireAuth,
              private router: Router,
              private store: Store<fromAppReducer.AppState>) {
    // this.user = angularFireAuth.authState;
    // this.user.subscribe(
    //   (user) => {
    //     if (user) {
    //       this.userDetails = user;
    //       this.store.dispatch(new fromAuthActions.SignIn());
    //       user.getIdToken().then((tokenId) => {
    //         this.store.dispatch(new fromAuthActions.SetToken({token: tokenId}));
    //       });
    //       console.log('user:  ', user);
    //       console.log('userDetails:  ', this.userDetails);
    //     } else {
    //       this.userDetails = null;
    //     }
    //   }
    // );
  }

  ngOnInit() {
  }

  signInWithGoogle() {
    this.angularFireAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    ).then(
      (auth) => {
        this.store.dispatch(new fromAuthActions.SignIn());
        this.store.dispatch(new fromAuthActions.SetToken({token: auth.token}));
      }
    );
  }

  signInWithGithub() {
    return this.angularFireAuth.auth.signInWithPopup(
      new firebase.auth.GithubAuthProvider()
    );
  }

  signInWithTwitter() {
    return this.angularFireAuth.auth.signInWithPopup(
      new firebase.auth.TwitterAuthProvider()
    );
  }

  signInWithFacebook() {
    return this.angularFireAuth.auth.signInWithPopup(
      new firebase.auth.FacebookAuthProvider()
    );
  }

}
