import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import * as constants from './constants/constants'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, combineReducers} from 'redux'
import authorize from './reducers/authorize'
import expenses from './reducers/expenses'
import thunkMiddleware from 'redux-thunk'

const initialState = {
    expenses: {
        expenses: [],
        addExpenseDialogOpen: false,
        expenseEditorOpen: false
    },
    authorize: {
        user: JSON.parse(sessionStorage.getItem(constants.userSessionKey))
    }
};

const combinedReducers = combineReducers({authorize, expenses})

const store = createStore(combinedReducers, initialState, applyMiddleware(thunkMiddleware))

ReactDOM.render(
    <Provider store={store}><App/></Provider>, document.getElementById('root'));
registerServiceWorker();
