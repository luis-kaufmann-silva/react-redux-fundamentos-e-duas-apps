import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';

import promise from 'redux-promise';
import multi from 'redux-multi';
import thunk from 'redux-thunk';

import { Provider } from 'react-redux';


const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ 
    && window.__REDUX_DEVTOOLS_EXTENSION__()

import reducers from 'root/reducers';
import App from 'root/app';

const store = applyMiddleware(multi, promise, thunk)(createStore)(reducers, devTools);
// const store = createStore(reducers, devTools);

ReactDOM.render(
    <Provider store={store}>
        {/* <Field /> */}
        <App/>
    </Provider>
    , 
    document.getElementById('app')
);