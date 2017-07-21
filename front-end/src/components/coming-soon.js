/**
 * Created by Administrator on 2017/7/18 0018.
 */

import React,{ Component } from 'react';
import '../css/coming-soon.css'
import '../iconfont/iconfont.css'
import $ from 'jquery'
import { HashRouter as Router, Link   } from 'react-router-dom';

class Cominglist extends Component{
	state = {
		data:[],
		initialHeight: 200
	}
	componentDidMount(){
		var that = this;
		$.get("http://localhost:8080/comingsoon?page=1&count=7",function (res) {
			var getData = JSON.parse(res).data.films
				that.setState({
					data:getData
				});
		})
		
	}
	
	render(){
		return(
			<div className="playing">
				<ul>
					{
						this.state.data.map(function (item,index) {
							var time = new Date(item.premiereAt);
							var mm = time.getMonth()+1;
							var dd = time.getDate();
							var day = time.getDay();
							var arr = ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'];
							var newDay = arr[day];
							{/*console.log(newDay);*/}
							return(
								<li key={index}>
									<Link to={'/filter/'+item.id}>
									<div className="information">
										<div className="inf-left">
											<img src={item.poster.thumbnail}/>
										</div>
										<div className="inf-right">
											<div className="inf-rightt">
												<span className='pl'>{item.name}</span>
												<span className='pr'><i className='iconfont'>&#xe649;</i></span>
											</div>
											<div className="inf-rightc">
												{item.intro}
											</div>
											<div className="inf-rightb">
												{mm}月{dd}日上映
												　　{newDay}
											</div>
										</div>
									</div>
									</Link>
								</li>
							)
						})
					}
				
				</ul>
			
			</div>
		
		)
		
	}
}


export default Cominglist;