import Networking from '../utilities/networking.js';
// import {safeGetCredentials, formatActionForNetwork} from '../utilities/Utilities.js';
// actions!
export const SET_NOTIFICATION = 'SET_NOTIFICATION';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const CLEAR_SESSION = 'CLEAR_SESSION';


// action creators!
export function addNotification(text, style) {
    return {
        type: SET_NOTIFICATION,
        text: text,
        style: style || 'danger'
    };
}

function sendLogin(email, password) {
    return {
        type: LOGIN_REQUEST,
        email: email,
        password: password
    };
}

function loginFail(data) {
    return addNotification(data.message);
}

export function loginSuccess(user) {
    return {
        type: LOGIN_SUCCESS,
        user: user
    };
}

export function login(email, password) {
    return (dispatch) => {
        dispatch(sendLogin(email, password));
        return Networking.postData({
            url: `${Networking.getBaseDomain()}/api/login`,
            method: 'POST',
            data: {
                email: email,
                password: password
            }
        })
        .then(response => response.json()
        .catch(() => dispatch(loginFail())))
        .then(json => {
            if (json.success) {
                dispatch(loginSuccess(json.data));
            } else {
                dispatch(loginFail(json));
            }
        });
    };
}

export function clearSession() {
    return {type: CLEAR_SESSION};
}
