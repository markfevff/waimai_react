import {CATEGORY_DATA} from '../actions/actionTypes';

const initState = {
    categoryData: [],
};

export default function categoryReducer(state=initState,action){
    switch(action.type){
        case CATEGORY_DATA:
            return {...state,...{categoryData:action.categoryData}};
        default:
            return state;
    }
}