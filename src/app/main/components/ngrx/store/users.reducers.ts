import * as UsersActions from './users.actions';
import { Users } from '../../../shared/models';

export interface AppState {
    usersReducer: UserState;
}

export interface UserState {
    users: Users[];
}

const initialState: UserState = {
    users: [
        {
            'id': 1,
            'name': 'Leanne Graham',
            'username': 'Bret',
            'email': 'Sincere@april.biz',
            'address': {
              'street': 'Kulas Light',
              'suite': 'Apt. 556',
              'city': 'Gwenborough',
              'zipcode': '92998-3874',
              'geo': {
                'lat': '-37.3159',
                'lng': '81.1496'
              }
            },
            'phone': '1-770-736-8031 x56442',
            'website': 'hildegard.org',
            'company': {
              'name': 'Romaguera-Crona',
              'catchPhrase': 'Multi-layered client-server neural-net',
              'bs': 'harness real-time e-markets'
            }
        },
        {
            'id': 2,
            'name': 'Leanne Graham',
            'username': 'Bret',
            'email': 'Sincere@april.biz',
            'address': {
              'street': 'Kulas Light',
              'suite': 'Apt. 556',
              'city': 'Gwenborough',
              'zipcode': '92998-3874',
              'geo': {
                'lat': '-37.3159',
                'lng': '81.1496'
              }
            },
            'phone': '1-770-736-8031 x56442',
            'website': 'hildegard.org',
            'company': {
              'name': 'Romaguera-Crona',
              'catchPhrase': 'Multi-layered client-server neural-net',
              'bs': 'harness real-time e-markets'
            }
        }
    ]
};

export function UsersReducer(state = initialState, action: UsersActions.UsersActions) {
    switch (action.type) {
        case UsersActions.ADD_USER:
            return {
                ...state,
                users: [...state.users, action.payload]
            };
        case UsersActions.ADD_USERS:
            return {
                ...state,
                users: [...state.users, ...action.payload]
            };
        case UsersActions.UPDATE_USER:
            const oldUser = state.users.find((u) => u.id === action.payload.index);
            const userIndex = findIndex(state, action.payload.index);
            const updatedUser = {
                ...oldUser,
                ...action.payload.user
            };
            const users = [...state.users];
            users[userIndex] = updatedUser;
            return {
                ...state,
                users: users
            };
        case UsersActions.DELETE_USER:
            const oldUsers = [...state.users];
            const deleteIndex = findIndex(state, action.payload.index);
            oldUsers.splice(deleteIndex, 1);
            return {
                ...state,
                users: oldUsers
            };
        default:
            return state;
    }
}


function findIndex(state, id) {
    return state.users.findIndex((u) => u.id === id);
}
