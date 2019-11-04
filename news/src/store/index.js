import {createStore, applyMiddleware} from "redux";
import {reducers} from "../reducers/index.js";
import {rootSaga} from "../saga";
import {composeWithDevTools} from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

const saga = createSagaMiddleware();
const store = createStore(reducers, composeWithDevTools(applyMiddleware(saga)));

saga.run(rootSaga);

export default store;
export * from '../reducers/actions'