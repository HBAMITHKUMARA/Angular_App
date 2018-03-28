import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { Effect, Actions } from '@ngrx/effects';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/take';
import { fromPromise } from 'rxjs/observable/fromPromise';

import * as AuthActions from './auth.actions';

@Injectable()
export class AuthEffects {

    constructor(
        private actions$: Actions,
        private angularFireAuth: AngularFireAuth,
        private router: Router,
        private route: ActivatedRoute ) {}

    @Effect()
    authSignup = this.actions$
        .ofType(AuthActions.TRY_SIGNUP)
        .map((action: AuthActions.TrySignUp) => {
            return action.payload;
        })
        .switchMap((authData: {email: string, password: string}) => {
            return fromPromise(this.angularFireAuth.auth
                .createUserWithEmailAndPassword(authData.email, authData.password));
        })
        .switchMap(() => {
            return this.angularFireAuth.idToken.take(1);
        })
        .mergeMap((token: string) => {
            this.navigateToTargetUrl();
            return [
                {
                    type: AuthActions.SIGNUP
                },
                {
                    type: AuthActions.SET_TOKEN,
                    payload: {token: token}
                }
            ];
        });

    @Effect()
    authSignIn = this.actions$
        .ofType(AuthActions.TRY_SIGNIN)
        .map((action: AuthActions.TrySignIn) => {
            return action.payload;
        })
        .switchMap((authData: {email: string, password: string}) => {
            return fromPromise(this.angularFireAuth.auth
                .signInWithEmailAndPassword(authData.email, authData.password));
        })
        .switchMap(() => {
            return this.angularFireAuth.idToken.take(1);
        })
        .mergeMap((token: string) => {
            this.navigateToTargetUrl();
            return [
                {
                    type: AuthActions.SIGNIN
                },
                {
                    type: AuthActions.SET_TOKEN,
                    payload: {token: token}
                }
            ];
        });

    @Effect()
    authLogOut = this.actions$
        .ofType(AuthActions.TRY_SIGNOUT)
        .map(() => {
            return fromPromise(this.angularFireAuth.auth.signOut());
        })
        .mergeMap(() => {
            this.navigateToTargetUrl();
            return [
                {
                    type: AuthActions.SIGNOUT
                },
                {
                    type: AuthActions.SET_TOKEN,
                    payload: {token: null}
                }
            ];
        });

    @Effect()
    userSession = this.actions$
        .ofType(AuthActions.SIGNIN_BY_USER_SESSION)
        .map(() => {
            return this.angularFireAuth.authState;
        })
        .switchMap(() => {
            return this.angularFireAuth.idToken.take(1);
        })
        .mergeMap((token: string) => {
            this.navigateToTargetUrl();
            return [
                {
                    type: AuthActions.SIGNIN
                },
                {
                    type: AuthActions.SET_TOKEN,
                    payload: {token: token}
                }
            ];
        });

    navigateToTargetUrl() {
        let targetUrl = this.route.snapshot.queryParams['targetUrl'];
        if (targetUrl === undefined) {
            targetUrl = '';
        }
        this.router.navigate([targetUrl]);
    }

}
