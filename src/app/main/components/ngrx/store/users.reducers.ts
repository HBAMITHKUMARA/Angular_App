import * as UsersActions from './users.actions';

const initialState = {
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
        default:
            return state;
    }
}
