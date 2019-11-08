import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';

import grey from '@material-ui/core/colors/grey'

import purple from '@material-ui/core/colors/purple';
import red from '@material-ui/core/colors/red';

const primary = grey[900]; // #F44336

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,

    },
    header: {
        paddingRight: theme.spacing(7),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));
export const Head = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar
                className={classes.header}
                position='static'
                color='primary'
            >
                <Toolbar
                    align='center'>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MoreVertIcon/>
                    </IconButton>
                    <Typography className={classes.title}
                        variant='headline'
                        color='inherit'
                        align='center'
                    >
                    HEADER
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
};
