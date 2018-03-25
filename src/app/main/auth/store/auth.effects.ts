import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { Effect, Actions } from '@ngrx/effects';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { fromPromise } from 'rxjs/observable/fromPromise';

import * as AuthActions from './auth.actions';

@Injectable()
export class AuthEffects {

    constructor(private actions$: Actions, private angularFireAuth: AngularFireAuth ) {}

    @Effect()
    authSignup = this.actions$
        .ofType(AuthActions.TRY_SIGNUP)
        .map((action: AuthActions.TrySignUp) => {
            return action.payload;
        })
        .switchMap((authData: {email: string, password: string}) => {
            console.log('creating user for authData', authData);
            return fromPromise(this.angularFireAuth.auth
                .createUserWithEmailAndPassword(authData.email, authData.password));
        })
        .switchMap(() => {
            console.log('token from ngfire2 switchMAP');
            return this.angularFireAuth.idToken;
        })
        .mergeMap((token: string) => {
            console.log('token from ngfire2', token);
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

}
