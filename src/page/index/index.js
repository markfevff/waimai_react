import React from 'react';
import ReactDom from 'react-dom';//不可以加大括号

import {Provider} from 'react-redux';
import Main from './Main/Main.jsx';

import store from './store';

ReactDom.render(
    <Provider store={store}>
        <Main/>
    </Provider>,
    document.getElementById('root')
);