import React from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../actions/tabAction.js';
import {store} from '../store.js';

class Main extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);
    }
    click() {
        this.props.dispatch(addTodo({
            num: 10
        }))
    }
    render() {
        let num = this.props.num;
        return(
            <div onClick={this.click.bind(this)}>{num}</div>
        );
    }
}

Main = connect((state)=>{
    return{
        num: state.tabReducer.num,
    }
})(Main);

export default Main;
