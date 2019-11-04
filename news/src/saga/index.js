import {take, put, all} from 'redux-saga/effects'
import axios from 'axios';
import *as ACTION from '../constants'

function* getNewsPostsSaga() {
    while (true) {
        yield take (ACTION.GET_POSTS);
        const response = yield axios.get('news-blog/posts');

        yield put ({
            type: ACTION.SET_POSTS,
            payload: response.data
        })
    }
}

export function* rootSaga () {
    yield all ([getNewsPostsSaga()])
}