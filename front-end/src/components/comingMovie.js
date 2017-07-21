
/**
 * Created by Administrator on 2017/7/18 0018.
 */
import React,{ Component } from 'react';

import '../css/coming-soon.css'
import $ from 'jquery'
import { HashRouter as Router, Link  } from 'react-router-dom';

class Coming extends Component{
	state = {
		data: [],
	}
	componentDidMount() {
		var that = this
		$.get('http://localhost:8080/comingmovie?page=1&count=3',function (res) {
			var getData = JSON.parse(res).data.films
				that.setState({
					data:getData
				});
		
		})
	}
	render(){
		return(
				<div className="coming">
					<div className="coming-title">
						<span className="titleword">即将上映</span>
						<span className="xian"></span>
					</div>
					<div className='comingmovie'>
						<ul>
							{
								this.state.data.map(function (item,index) {
									var time = new Date(item.premiereAt);
									var mm = time.getMonth()+1;
									var dd = time.getDate();
									return(
									<li key={index} >
										<Link to={'/filter/'+item.id}>
										<div className='comingmoviet'><img src={item.cover.origin}/></div>
										<div className='comingmovieb'>
											<p className='coming-left'>{item.name}</p>
											<div className='coming-right'>{mm}月{dd}日上映</div>
										</div>
										</Link>
									</li>
										
									)
								})
							}
						
						</ul>
					</div>
					<div className='comingmore'><span>更多即将上映电影</span></div>
				</div>
			
		)
		
	}
	
}

export default Coming;