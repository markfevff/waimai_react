import React from 'react';
import HomeHeader from './Header/HomeHeader';
import Category from './Category/Category';
/*
* @constructor <Home>
* 首页页面
* */
export default class Home extends React.Component{
    render(){
        return(
            <div>
                <HomeHeader/>
                <Category/>
            </div>
        )
    }
}