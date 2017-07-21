/**
 * Created by Administrator on 2017/7/20 0020.
 */

import React,{ Component } from 'react';
import Banner from './swiper'
import Main from './main'
import Coming from './comingMovie'

class Home extends Component{
	render(){
		return(
			<div className="allmovie">
				<Banner/>
				<Main/>
				<Coming/>
			</div>
		)
	}
}
export default Home;