import React from 'react';
import ReactDom from 'react-dom';//不可以加大括号

import {Provider} from 'react-redux';
import Container from './Main/Container';

import store from './store';

ReactDom.render(
    <Provider store={store}>
        <Container/>
    </Provider>,
    document.getElementById('root')
);