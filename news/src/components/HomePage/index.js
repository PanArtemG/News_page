import React from 'react';
import store, {addNewPost, getNewsPosts} from "../../store";
import {connect} from "react-redux";
import {NewsList} from "../";
import Button from '@material-ui/core/Button';


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
            <Button onClick={ () => addNewPost(testNews)} variant="contained" color="primary">
                CREATE NEW NEWS
            </Button>
            {/*<button onClick={ () => addNewPost(testNews)}>CREATE NEW NEWS</button>*/}
            <NewsList/>
        </div>
    )
});