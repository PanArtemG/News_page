import React from 'react';
import store, {addNewPost, getNewsPosts} from "../../store";
import {connect} from "react-redux";
import {NewsList} from "../";


export const HomePage = connect(null, {addNewPost, getNewsPosts})(props => {
    const { addNewPost, getNewsPosts } = props;

    const testNews = {
        title: 'Test',
        image: 'https://ktonanovenkogo.ru/image/priroda-gora.jpg',
        description: 'TEST',
        data: new Date(),
        author: 'Author',
        category: 'Category'
    };

    return (
        <div>
            <h1>KY</h1>
            <button onClick={ () => addNewPost(testNews)}>CREATE NEW NEWS</button>
            <NewsList/>
        </div>
    )
});