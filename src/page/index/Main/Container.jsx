import React from 'react';
import Main from './Main';
import {hot} from 'react-hot-loader';

/*
* @constructor <Container/>
* 用于热更新的组件
* 即修改代码页面会自动更新而不用自动刷新即可
* */
class Container extends React.Component{
    render(){
        return <Main/>
    }
}

export default hot(module)(Container);