import { Action } from '@ngrx/store';

import { Users } from '../../../shared/models';

export const ADD_USER = 'ADD_USER';
export const ADD_USERS = 'ADD_USERS';
export const UPDATE_USER = 'UPDATE_USER';
export const DELETE_USER = 'DELETE_USER';

export class AddUser implements Action {
    readonly type = ADD_USER;
    constructor(public payload: Users) { }
}

export class AddUsers implements Action {
    readonly type = ADD_USERS;
    constructor(public payload: Users[]) { }
}

export class UpdateUser implements Action {
    readonly type = UPDATE_USER;
    constructor(public payload: {index: number, user: Users}) { }
}

export class DeleteUser implements Action {
    readonly type = DELETE_USER;
    constructor(public payload: {index: number}) { }
}

export type UsersActions = AddUser | AddUsers | UpdateUser | DeleteUser;
