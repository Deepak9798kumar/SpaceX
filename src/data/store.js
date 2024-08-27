// store.js
import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
import { thunk } from 'redux-thunk';
import launchesReducer from '../reducers';

const store = createStore(launchesReducer, applyMiddleware(thunk));

export default store;