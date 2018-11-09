import {createStore,applyMiddleware} from 'redux';

import thunk from 'redux-thunk';//redux的中间件

import {mainReducer} from './reducers/main';

let middleware = [];
middleware.push(thunk);

const store = createStore(
    mainReducer,
    applyMiddleware(...middleware)
);

if(module.hot){
    module.hot.accept('./reducers/main',()=>{
        const nextRootReducer = require('./reducers/main.js').default;
        store.replaceReducer(nextRootReducer);
    });
}
export default store;