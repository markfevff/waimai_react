import React from 'react';
import {connect} from 'react-redux';
import store from '../../store';
import {categoryData} from '../../actions/categoryAction';
import './Category.scss';
import axios from 'axios';

/*
* @constructor <Category>
* 首页页面的分类
* */
class Category extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            categoryData: this.props.categoryData,
        }
    }

    componentDidMount(){
        this.fetchData();
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            categoryData:nextProps.categoryData,
        })
    }

    fetchData(){
        axios({
            method: 'get',
            url: './json/head.json'
        })
            .then(res=>{
                console.log(res);
                store.dispatch(categoryData(res.data.data.primary_filter));
            })
    }

    render(){
        let categoryData = this.state.categoryData;
        categoryData = categoryData.slice(0,8);
        return(
            <div className="category clearfix">
                {
                    categoryData.map(item=>{
                        return(
                            <div key={item.code} className="category-item">
                                <img src={item.url} alt="" className="category-img"/>
                                <p className="category-name">{item.name}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default connect((state)=>{
    return{
        categoryData:state.categoryReducer.categoryData,
    }
})(Category);