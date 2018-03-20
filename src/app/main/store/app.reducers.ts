import { ActionReducerMap } from '@ngrx/store';

import * as fromUsersReducer from '../components/ngrx/store/users.reducers';
import * as fromAuthReducer from '../auth/store/auth.reducers';

export interface AppState {
    usersReducer: fromUsersReducer.UserState;
    authReducer: fromAuthReducer.State;
}

export const reducers: ActionReducerMap<AppState> = {
    usersReducer: fromUsersReducer.usersReducer,
    authReducer: fromAuthReducer.authReducer
};
