import React from 'react';
import {HomePage} from './components/index.js';
import {Head} from "./commons/";
import {Provider} from 'react-redux';
import store from "./store";

import './App.css';

function App() {
  return (
    <Provider store={store}>
        <div className="App">
            <Head/>
            <HomePage/>
        </div>
    </Provider>
  );
}

export default App;
