import React from 'react';

import { makeStyles, fade } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

import grey from '@material-ui/core/colors/grey'
const primaryGrey = grey[900]; // #F44336

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    header: {
        paddingRight: theme.spacing(7),
        background: 'linear-gradient(45deg, #252525 30%, #FFF 300%)',
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    search: {
        position: 'absolute',
        right: -16,
        [theme.breakpoints.down('xs')]: {
            display: 'none',
        },
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },

    },
    searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 120,
            '&:focus': {
                width: 200,
            },
        },
        [theme.breakpoints.down('sm')]: {
            position: 'relative',
            '&:focus': {
                width: 160,
            },
        },
    }
}));

export const Header = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar
                className={classes.header}
                position='fixed'
            >
                <Toolbar
                    align='center'>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MoreVertIcon/>
                    </IconButton>
                    <Typography className={classes.title}>
                    HEADER
                    </Typography>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
};
