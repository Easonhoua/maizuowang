/**
 * Created by Administrator on 2017/7/18 0018.
 */
import React,{ Component } from 'react';
import { HashRouter as Router,  Route, Link, NavLink  } from 'react-router-dom';


import '../css/index_style.css'
import $ from 'jquery'
import TotalList from './totallist'


class Main extends Component{
	state = {
		data: [],
		initialHeight: 200,
	}
	componentDidMount() {
		var that = this
		$.get('http://localhost:8080/hotmovie?page=1&count=5',function (res) {
			var getData = JSON.parse(res).data.films
				that.setState({
					data:getData
				});
		})
		
	}
	
	render(){
		return(
			<Router>
				<div className="hotmovie">
					<ul>
						{
							this.state.data.map(function (item,index) {
								return(
								<li key={index} >
									<Link to={'/filter/'+item.id}>
									<div className="lit"><img src={item.cover.origin} /></div>
									<div className='lib'>
										<div className='libleft'>
											<strong>{item.name}</strong>
											<p><span>{item.cinemaCount}</span>家影院上映<span>{item.watchCount}</span>人购票</p>
										</div>
										<div className='libright'>{item.grade}</div>
									</div>
									</Link>
								</li>
								
								)
							})
						}
						
					</ul>
					
					<div className="morehotmovie">
						更多热映电影 {/*<NavLink exact activeClassName="z-act" to="/totalList">更多热映电影</NavLink>*/}
					</div>
					
					{/*<Route path="/totalList" component={TotalList}></Route>*/}
				
				</div>
			</Router>
		)
		
	}
	
}

export default Main;