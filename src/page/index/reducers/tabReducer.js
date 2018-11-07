import {CHANGE_TAB} from '../actions/actionTypes';

const initState = {
    tabs: [
        {
            name: '首页',
            key: 'home',
        },
        {
            name: '订单',
            key: 'order',
        },
        {
            name: '我的',
            key: 'my',
        }
    ],
    activeKey: 'home'
};

function tabReducer(state=initState,action){
    switch(action.type) {
        case CHANGE_TAB:
            return {...state,...{activeKey:action.activeKey}};
        default:
            return state;
    }
}

export default tabReducer;