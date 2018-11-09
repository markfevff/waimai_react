import tabReducer from './tabReducer';
import categoryReducer from './categoryReducer';

import {combineReducers} from 'redux';

export const mainReducer = combineReducers({
    tabReducer,
    categoryReducer
})
