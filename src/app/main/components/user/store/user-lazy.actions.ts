import { Action } from '@ngrx/store';

export const USER = 'USER';
export const LOAD_USER = 'LOAD_USER';

export class User implements Action {
    readonly type = USER;
    constructor(public payload: any) {}
}

export class LoadUser implements Action {
    readonly type = LOAD_USER;
}

export type UserActions = User | LoadUser;
