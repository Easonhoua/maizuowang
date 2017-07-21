/**
 * Created by Administrator on 2017/7/18 0018.
 */
import React,{ Component } from 'react';
import $ from 'jquery'
import { BrowserRouter as Router,  Route, Link, NavLink  } from 'react-router-dom';

import Filmslist from './films'
import Cominglist from './coming-soon'
// import Coming from './components/comingMovie'

import '../css/totallist.css'


class TotalList extends Component{
	render(){
		return(
			<Router>
				<div className='menu'>
					<ul className='menulist'>
						<li>
							<NavLink exact activeClassName="z-act" to="/filmslist">正在热映</NavLink>
						</li>
						<li>
							<NavLink activeClassName="z-act" to="/coming-soon">即将上映</NavLink>
						</li>
					</ul>
					<Route  path="/totallist"  component={ Filmslist }  />
					<Route  path="/filmslist"  component={ Filmslist }  />
					<Route  path="/coming-soon"  component={ Cominglist } />
				</div>
			</Router>
		)
	}
}


export default TotalList;