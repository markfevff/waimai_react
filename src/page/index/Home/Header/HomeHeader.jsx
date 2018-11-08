import React from 'react';
import './HomeHeader.scss';
import SearchBar from '../SearchBar/SearchBar'

/*
* @constructor <HomeHeader>
* 首页页面header
* */
export default class HomeHeader extends React.Component{
    render(){
        return(
            <div className="home-header">
                <SearchBar/>
                <img className="banner-img" src="//xs01.meituan.net/waimai_i/img/bannertemp.e8a6fa63.jpg" alt=""/>
            </div>
        )
    }
}