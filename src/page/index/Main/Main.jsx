import React from 'react';
import {connect} from 'react-redux';
import BottomBar from '../BottomBar/BottomBar';
import store from '../store';

class Main extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
                <BottomBar/>
            </div>
        );
    }
}

Main = connect((state)=>({

}))(Main);

export default Main;
