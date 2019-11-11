import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import {HomePage, FormCreatePost} from './components/index.js';
import {Header} from "./commons/index.js";
import {Provider} from 'react-redux';
import store from "./store";

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: theme.spacing(7),
    },
}));
// import {NewsList} from "./components/index";

function App() {
    const classes = useStyles();
  return (
     <Provider store={store}>
        <Router>
            <div className="App">
                <div className={classes.container}>
                    <Header/>
                </div>
            </div>
            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route path='/create_news' component={FormCreatePost}/>
                <Route path='/contact'/>
                <Route path='/about_us'/>
            </Switch>
        </Router>
     </Provider>
  );
}

export default App;
