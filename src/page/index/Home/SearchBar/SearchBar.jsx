import React from 'react';
import './SearchBar.scss';

/*
* @constructor <SearchBar>
* 首页页面header的search
* */
export default class SearchBar extends React.Component{
    render(){
        return(
            <div className="search-bar">
                <div className="location-bar">
                    <div className="location-icon"></div>
                    <div className="location-name"></div>
                </div>
                <div className="search">
                    <div className="search-icon"></div>
                    <div className="search-text"></div>
                </div>
            </div>
        )
    }
}