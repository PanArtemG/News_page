import React from 'react';
import store, {addNewPost, getNewsPosts} from "../../store";
import {connect} from "react-redux";

import {FormCreatePost} from '../';

import {NewsList} from "../";
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: theme.spacing(7),
    },
    btnAddPost: {
        marginBottom: theme.spacing(1),
    }

}));

export const HomePage = connect(null, {addNewPost, getNewsPosts})(props => {
    const { addNewPost, getNewsPosts } = props;
    const classes = useStyles();

    const testNews = {
        title: 'Test',
        image: 'https://ktonanovenkogo.ru/image/priroda-gora.jpg',
        description: 'TEST',
        data: new Date(),
        author: 'Author',
        category: 'Category'
    };

    return (
        <div className={classes.container}>
            <h1>KY</h1>
            <FormCreatePost className={classes.form} />
            <Button onClick={ () => addNewPost(testNews)} variant="contained" color="primary">
                TEST
            </Button>
            <NewsList/>
        </div>
    )
});