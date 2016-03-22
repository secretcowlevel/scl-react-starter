import {
    SET_NOTIFICATION,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    CLEAR_SESSION
} from '../actions/';
import {safeGetCredentials} from '../utilities/Utilities.js';

const initialState = {
    notification: {
        text: '',
        style: 'danger'
    },
    user: safeGetCredentials(),
    isFetching: false
};

function store(state = initialState, action) {
    switch (action.type) {
        case SET_NOTIFICATION:
            return Object.assign({}, state, {
                notification: {
                    text: action.text,
                    style: action.style
                }
            });
        case LOGIN_REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false
            });
        case LOGIN_SUCCESS:
            window.localStorage.setItem('scl-credentials', JSON.stringify(action.user));
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                user: action.user
            });
        case CLEAR_SESSION:
            window.localStorage.removeItem('scl-credentials');
            return Object.assign({}, state, initialState, {
                notification: {
                    text: 'You have been logged out!'
                },
                user: null
            });
        default:
            return state;
    }
}

export default store;
