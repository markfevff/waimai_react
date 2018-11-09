import {CATEGORY_DATA} from './actionTypes';

export function categoryData(categoryData){
    return{
        type: CATEGORY_DATA,
        categoryData,
    }
}
