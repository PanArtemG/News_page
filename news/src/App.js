import React from 'react';
import {HomePage, FormCreatePost} from './components/index.js';
import {Header} from "./commons/index.js";
import {Provider} from 'react-redux';
import store from "./store";


import './App.css';

function App() {
  return (
    <Provider store={store}>
        <div className="App">
            <Header/>
            <HomePage/>
        </div>
    </Provider>
  );
}

export default App;
