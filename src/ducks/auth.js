import {all, put, take} from 'redux-saga/effects';
import { push } from 'react-router-redux';


export const moduleName = 'auth';
export const appName = 'uran';
export const SIGN_IN_REQUEST = `${appName}/${moduleName}/SIGN_UP_REQUEST`;
export const SIGN_IN_SUCCESS = `${appName}/${moduleName}/SIGN_IN_SUCCESS`;
export const SIGN_IN_ERROR = `${appName}/${moduleName}/SIGN_IN_ERROR`;

export default function reducer(state = {
    userID: '',
    AccessToken: '',
    error: null,
    loading: false,
    userInfo: null
}, action) {
    const {type, payload, error} = action;
    switch (type) {
        case SIGN_IN_REQUEST:
            return {...state, loading:true};
        case SIGN_IN_SUCCESS:
            console.log(payload);
            return {
                ...state,
                userID: payload.userID,
                AccessToken: payload.accessToken,
                error: null,
                userInfo: {
                    firstName: payload.first_name,
                    lastName: payload.last_name
                },
                loading:false
            };
        case SIGN_IN_ERROR:
            return {...state, error, loading:false};
        default:
            return state
    }
};


export function signIn(profile, tokenDetail) {
    return {
        type: SIGN_IN_REQUEST,
        payload: {profile, tokenDetail}
    }
}


export const signInSaga = function* () {
    while (true) {
        const action = yield take(SIGN_IN_REQUEST);
        const {profile, tokenDetail} = action.payload;
        const { accessToken, userID } = tokenDetail;
        const { first_name, last_name } = profile;
        try {
            // const response = { profile, tokenDetail};
            console.log(profile, tokenDetail, accessToken, userID);
            yield put({type: SIGN_IN_SUCCESS, payload: {
                    accessToken, userID,
                    first_name, last_name
                } });

            // yield put(push('/coin'));
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