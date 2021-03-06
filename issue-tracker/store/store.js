import {createStore, combineReducers} from 'react';

import thunk from 'redux-thunk';

import todoReducer from './reducer.js';

//this part allows you to combine multiple reducers into one allowing you to have only one store. Though I read in the docs it is reccomended to have a store for UI and one for data.
// let reducers = combineReducers({
//   todos: todoReducer,
// });

// to create the store pass the reducer into the createStore function brought in with redux.
const store = () => createStore(todoReducer);

export default store;
