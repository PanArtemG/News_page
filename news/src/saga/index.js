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



function* addNewsSaga() {
    while (true) {
        const { post } = yield take(ACTION.NEW_POST);
        const response = yield axios.post('news-blog/new_post', post);
        if (response.data.created) {
            yield put({
                type: ACTION.SET_NEW_POST,
                payload: response.data.post
            })
        }
    }
}

export function* rootSaga () {
    yield all ([
        getNewsPostsSaga(),
        addNewsSaga()
    ])
}