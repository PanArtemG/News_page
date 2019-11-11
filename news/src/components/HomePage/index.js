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
    },
    wrapPosts: {
        width: 1200,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        // display: 'flex',
        // alignItems: 'center',
        // justifyContent: 'space-around',

    }

}));

export const HomePage = connect(null, {addNewPost, getNewsPosts})(props => {
    const { getNewsPosts } = props;
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <h1>COLECTION</h1>
            <div className={classes.wrapPosts}>
                <NewsList/>
            </div>
        </div>
    )
});