import {all, put, take} from 'redux-saga/effects';
import { push } from 'react-router-redux';


export const moduleName = 'auth';
export const appName = 'uran';
export const SIGN_IN_REQUEST = `${appName}/${moduleName}/SIGN_UP_REQUEST`;
export const SIGN_IN_SUCCESS = `${appName}/${moduleName}/SIGN_IN_SUCCESS`;
export const SIGN_IN_ERROR = `${appName}/${moduleName}/SIGN_IN_ERROR`;

export default function reducer(state = {
    userID: '',
    accessToken: '',
    error: null,
    loading: false,
    name: "",
    picture: "",
    isAuthenticated: false
}, action) {
    const {type, payload, error} = action;
    switch (type) {
        case SIGN_IN_REQUEST:
            return {...state, loading:true};
        case SIGN_IN_SUCCESS:
            // console.log(payload);
            return {
                ...state,
                userID: payload.userID,
                accessToken: payload.accessToken,
                error: null,
                picture: payload.picture,
                name: payload.name,
                loading:false,
                authorized: true
            };
        case SIGN_IN_ERROR:
            return {...state,  error: payload.error, loading:false};
        default:
            return state
    }
};


export function signIn(profile) {
    return {
        type: SIGN_IN_REQUEST,
        payload: {profile}
    }
}


export const signInSaga = function* () {
    while (true) {
        const action = yield take(SIGN_IN_REQUEST);
        const {profile } = action.payload;
        try {
            yield put({type: SIGN_IN_SUCCESS, payload: profile });
            yield put(push('/albums'));
        } catch (e) {
            console.log('erorr', e);
        }
    }
};

export const saga = function* () {
    yield all([
        signInSaga()
    ]);
};