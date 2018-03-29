import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';

import * as UserLazyActions from './user-lazy.actions';
import { UserLazy } from '../../../shared/models';


@Injectable()
export class UserLazyEffects {

    constructor(private actions$: Actions,
                private httpClient: HttpClient) {}

    @Effect()
    loadUser = this.actions$
    .ofType(UserLazyActions.LOAD_USER)
    .switchMap((action: UserLazyActions.LoadUser) => {
        return this.httpClient.get<UserLazy>('./assets/data/user.json');
    })
    .map((user: UserLazy) => {
        return {
            type: UserLazyActions.USER,
            payload: user
        };
    });
}
