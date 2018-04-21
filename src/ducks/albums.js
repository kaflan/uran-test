import {all, put, take, call} from 'redux-saga/effects';
// import { push } from 'react-router-redux';


export const moduleName = 'albums';
export const appName = 'uran';


export const REQUEST = `${appName}/${moduleName}/REQUEST`;
export const SUCCESS = `${appName}/${moduleName}/SUCCESS`;
export const ERROR = `${appName}/${moduleName}/ERROR`;

export default function reducer (state={
    albums: [],
    loading: false
}, action) {
    const {type, payload} = action;
    switch (type) {
        case REQUEST:
            return {
                ...state,
                loading: true
            };
        case SUCCESS:
            // console.log("___LOG___SUCCESS", payload)
            return {
                ...state,
                albums: payload.albums,
                loading: false
            };
        case ERROR:
            return {
                state,
                error: payload.error,
                loading:false
            };
        default:
            return state;
    }
}

export const fetchAlbomData = (userId, token) => fetch(`https://graph.facebook.com/v2.6/${userId}/albums?
access_token=${token}&debug=all&format=json&method=
get&pretty=0&suppress_http_code=1`);


export const alboms = function* () {
    while (true) {
        const action = yield take(REQUEST);
        const userId = action.payload.userId;
        const token  = action.payload.token;
        try {
            const response = yield call(fetchAlbomData, userId, token);
            const { data } = yield call(() => response.json());
            // console.log("___LOG___payload", data);
            yield put({type: SUCCESS, payload: {
                    albums: data
                } });
        } catch (e) {
            console.log("___LOG___err", e);
        }
    }
};

export function getAlbums(userId, token) {
    return {type: REQUEST, payload: {
            userId, token
        } };
}
export const saga = function* () {
    yield all([
        alboms()
    ]);
};