import React from 'react';

import {HomePage} from './components/index.js';
// import {HomePage} from './components/HomePage';
import './App.css';
import {Provider} from 'react-redux';
import store from "./store";

function App() {
  return (
    <Provider store={store}>
        <div className="App">
            <HomePage/>
        </div>
    </Provider>
  );
}

export default App;
