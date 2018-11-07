import { CHANGE_TAB } from './actionTypes';

export function changeTab(activeKey){
    return{
        type: CHANGE_TAB,
        activeKey
    }
}
