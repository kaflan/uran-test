import {all} from 'redux-saga/effects';
import {saga as authSaga} from '../ducks/auth';
import {saga as albumSaga} from "../ducks/albums";

export default function * rootSaga() {
    yield all([
        authSaga(),
        albumSaga()
    ])
}