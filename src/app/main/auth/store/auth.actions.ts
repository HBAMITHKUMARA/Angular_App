import { Action } from '@ngrx/store';

export const TRY_SIGNUP = 'TRY_SIGNUP';
export const SIGNUP = 'SIGNUP';
export const SIGNIN = 'SIGNIN';
export const SIGNOUT = 'SIGNOUT';
export const SET_TOKEN = 'SET_TOKEN';

export class TrySignUp implements Action {
    readonly type = TRY_SIGNUP;
    constructor(public payload: {email: string, password: string}) {}
}

export class SignUp implements Action {
    readonly type = SIGNUP;
}

export class SignIn implements Action {
    readonly type = SIGNIN;
}

export class SignOut implements Action {
    readonly type = SIGNOUT;
}

export class SetToken implements Action {
    readonly type = SET_TOKEN;
    constructor(public payload: {token: string}) { }
}

export type AuthActions = TrySignUp | SignUp | SignIn | SignOut | SetToken;
