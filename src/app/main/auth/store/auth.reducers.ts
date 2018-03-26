import * as AuthActions from './auth.actions';

export interface State {
    token: string;
    authenticated: boolean;
}

const initialState: State = {
    token: null,
    authenticated: false
};

export function authReducer(state = initialState, action: AuthActions.AuthActions) {
    switch (action.type) {
        case AuthActions.SIGNUP:
        case AuthActions.SIGNIN:
        console.log('SIGNUP done...');
            return {
                ...state,
                authenticated: true
            };
        case AuthActions.SIGNOUT:
            console.log('SIGNOUT done...');
            return {
                ...state,
                authenticated: false
            };
        case AuthActions.SET_TOKEN:
        console.log('SET_TOKEN done...');
            return {
                ...state,
                token: action.payload.token
            };
        default:
            return {
                ...state
            };
    }
}
