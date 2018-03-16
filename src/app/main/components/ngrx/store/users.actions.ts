import { Action } from '@ngrx/store';

import { Users } from '../../../shared/models';

export const ADD_USER = 'ADD_USER';
export const ADD_USERS = 'ADD_USERS';

export class AddUser implements Action {
    readonly type = ADD_USER;
    constructor(public payload: Users) { }
}

export class AddUsers implements Action {
    readonly type = ADD_USERS;
    constructor(public payload: Users[]) { }
}

export type UsersActions = AddUser | AddUsers;
