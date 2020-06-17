import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, combineReducers} from 'redux'
import {Provider} from 'react-redux'
import counterReducer from "./Reducers/Counter.js"
import resultsReducer from "./Reducers/Results.js"

const rootReducer = combineReducers({
    ctr: counterReducer,
    res: resultsReducer
})

const store = createStore(rootReducer)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();

