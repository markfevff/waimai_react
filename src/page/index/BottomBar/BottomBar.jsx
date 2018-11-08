import './BottomBar.scss';
import React from 'react';
import {connect} from 'react-redux';
import store from '../store';

import {changeTab} from '../actions/tabAction';


/*
* @constructor <BottonBar>
* 首页底部tab栏
* */
class BottomBar extends React.Component{
    constructor(props){
        super(props);
    }

    changeTab(key) {
        console.log(key);
        store.dispatch(changeTab(key));
    }

    renderItems() {
        let items = this.props.tabs;
        return items.map((item)=>{
            let cls = item.key + ' items';
            if(this.props.activeKey == item.key) {
                cls = cls + ' active';
            }
            return(
                <div key={item.key} className={cls} onClick={this.changeTab.bind(this,item.key)}>
                    <div className="item-icon"></div>
                    <div className="item-name">{item.name}</div>
                </div>
            )
        });
    }
    render() {
        return(
            <div className="bottom-bar">
                {this.renderItems()}
            </div>
        )
    }
}

export default connect((state)=>({
    tabs: state.tabReducer.tabs,
    activeKey:state.tabReducer.activeKey,
}))(BottomBar);

// export default BottomBar
