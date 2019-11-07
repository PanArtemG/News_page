import {combineReducers} from 'redux';
import * as ACTION from '../constants';

const initialState = {
    news_posts: []
};

const newsPostReducer = (state = initialState, action) => {
  const {type, payload} = action;
    switch (type) {
        case ACTION.SET_POSTS:
            return {
                ...state,
                news_posts: payload
            };
        case ACTION.SET_NEW_POST:
            return {
                news_posts: [
                    ...state.news_posts,
                    payload
                ]
            };
        default:
            return {...state}
    }
};

export const reducers = combineReducers({
    news: newsPostReducer
});
