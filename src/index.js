import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom"
import store from './store'
import {Provider} from 'react-redux'

// 使用mock
import './mock'

import "antd/dist/antd.css";
import './style/index.css';
import App from './App';

window.onunload = function () {
    localStorage.setItem('store', JSON.stringify(store.getState()));
};

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

