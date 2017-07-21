/**
 * Created by Administrator on 2017/7/18 0018.
 */

import React,{ Component } from 'react';
import '../css/fliter.css'
import $ from 'jquery'
// import { BrowserRouter as Router,  Route, Link, NavLink  } from 'react-router-dom';



class Fliter extends Component{
	state = {
		data:[],
	}
	componentDidMount(){
		var that = this;
		var id =this.props.location.pathname.match(/\d*/g).join('')
		$.get('http://localhost:8080/filter/?id='+id,function (res) {
			var getdata = JSON.parse(res).data.film;
			var arr = [];
			arr[0] = getdata;
				that.setState({
					data:arr
				});
		})
	}
	render(){
		return(
			<div className="fliter">
			{
				this.state.data.map(function (item,index) {
					var time = new Date(item.premiereAt);
					var mm = time.getMonth()+1;
					var dd = time.getDate();
					return(
						<div key={index}>
						<img src={item.cover.origin} className="photo"/>
						<div className="synopsis">
							<div className="title"><span></span>影片简介</div>
							<p>导　　演：{item.director}</p>
							<p>主　　演：
							{
								item.actors.map(function (item2,index2) {
									return(
										<span key={index2}>{item2.name} | </span>
									)
								})
							}
							</p>
							<p>地区语言：{item.nation}({item.language})</p>
							<p>类　　型：{item.category}</p>
							<p>上映日期：{mm}月{dd}日上映</p>
						</div>
						<div className="btnbox">
							<p className='details'>{item.synopsis}</p>
							<span>立即购票</span>
						</div>
					</div>
					)
				})
			}
		</div>
		)
	}
}

export default Fliter;