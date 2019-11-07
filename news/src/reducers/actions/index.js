import * as ACTION from '../../constants';
// ACTION для красоты записи

export const getNewsPosts = () => ({
    type: ACTION.GET_POSTS
});

export const setNewsPosts = (payload) => ({
    type: ACTION.SET_POSTS,
    payload
});

export const addNewPost = (post) => ({
   type : ACTION.NEW_POST,
   post
});


