import { Action } from '@ngrx/store';

export const TRY_SIGNUP = 'TRY_SIGNUP';
export const SIGNUP = 'SIGNUP';
export const TRY_SIGNIN = 'TRY_SIGNIN';
export const SIGNIN = 'SIGNIN';
export const TRY_SIGNOUT = 'TRY_SIGNOUT';
export const SIGNOUT = 'SIGNOUT';
export const SET_TOKEN = 'SET_TOKEN';
export const SIGNIN_BY_USER_SESSION = 'SIGNIN_BY_USER_SESSION';

export class TrySignUp implements Action {
    readonly type = TRY_SIGNUP;
    constructor(public payload: {email: string, password: string}) {}
}

export class SignUp implements Action {
    readonly type = SIGNUP;
}

export class TrySignIn implements Action {
    readonly type = TRY_SIGNIN;
    constructor(public payload: {email: string, password: string}) {}
}

export class SignIn implements Action {
    readonly type = SIGNIN;
}

export class TrySignOut implements Action {
    readonly type = TRY_SIGNOUT;
}

export class SignOut implements Action {
    readonly type = SIGNOUT;
}

export class SetToken implements Action {
    readonly type = SET_TOKEN;
    constructor(public payload: {token: string}) { }
}

export class SigninByUserSession implements Action {
    readonly type = SIGNIN_BY_USER_SESSION;
}

export type AuthActions = TrySignUp |
                        SignUp |
                        TrySignIn |
                        SignIn |
                        TrySignOut |
                        SignOut |
                        SetToken |
                        SigninByUserSession;
