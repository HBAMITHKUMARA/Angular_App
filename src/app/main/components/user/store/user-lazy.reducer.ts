import * as fromUserActions from './user-lazy.actions';
import { UserLazy } from '../../../shared/models';

export interface FeatureState {
    user: UserLazyState;
}

export interface UserLazyState {
    user: UserLazy;
}

const initialState: UserLazyState = {
    user: null
};

export function userLazyReducer(state = initialState, action: fromUserActions.UserActions) {
    switch (action.type) {
        case fromUserActions.USER:
            return {
                ...state,
                user: action.payload
            };
        default: {
            return {
                ...state
            };
        }
    }
}
