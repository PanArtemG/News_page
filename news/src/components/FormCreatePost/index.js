import React, {useState} from 'react';
import store, {addNewPost} from "../../store";
import {connect} from "react-redux";

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: theme.spacing(3),
    },
    containerInput: {
        display: 'flex',
        flexDirection: 'column',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 500,
    },
    textArea: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 500,
    },
    btnAddPost: {
        background: 'linear-gradient(45deg, #252525 30%, #FFF 300%)',
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    }

}));

export const FormCreatePost = connect(null, {addNewPost} )( props => {
    const {addNewPost} = props;
    const classes = useStyles();
    const [title, setTitle] = useState("");
    const [urlImg, setUrlImg] = useState("https://ktonanovenkogo.ru/image/priroda-gora.jpg");
    const [text, setText] = useState("");
    const [author, setAuthor] = useState("");
    const [category, setCategory] = useState("");

    const newPost = {
        title: title,
        image: urlImg,
        description: text,
        data: new Date(),
        author: author,
        category: category
    };

    return (
        <div className={classes.container}>
            <h1>Created your post</h1>
            <form className={classes.container} noValidate autoComplete="off">
                <div className={classes.containerInput}>
                    <TextField
                        className={classes.textField}
                        label="Title"
                        margin="normal"
                        variant="outlined"
                        onChange={(even) => setTitle(even.target.value)}
                    />
                    <TextField
                        className={classes.textField}
                        label="URL image"
                        defaultValue="https://ktonanovenkogo.ru/image/priroda-gora.jpg"
                        margin="normal"
                        variant="outlined"
                        onChange={(even) => setUrlImg(even.target.value)}
                    />
                    <TextField
                        className={classes.textField}
                        label="Tex for your news"
                        multiline={true}
                        rows={2}
                        rowsMax={10}
                        margin="normal"
                        variant="outlined"
                        onChange={(even) => setText(even.target.value)}
                    />
                    <TextField
                        className={classes.textField}
                        label="Author"
                        margin="normal"
                        variant="outlined"
                        onChange={(even) => setAuthor(even.target.value)}
                    />
                    <TextField
                        className={classes.textField}
                        label="Category"
                        margin="normal"
                        variant="outlined"
                        onChange={(even) => setCategory(even.target.value)}
                    />
                    <Button className={classes.btnAddPost} onClick={ ()=>addNewPost(newPost)} variant="contained" color="inherit">
                        ADD NEW NEWS
                    </Button>
                </div>
            </form>
        </div>
    );
})