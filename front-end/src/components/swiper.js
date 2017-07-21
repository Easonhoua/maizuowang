/**
 * Created by Administrator on 2017/7/17 0017.
 */

import React,{ Component } from 'react';
import { Carousel, WingBlank } from 'antd-mobile';
import $ from "jquery"



class Banner extends React.Component {
	state = {
		data: [],
		initialHeight: 200,
	}
	componentDidMount() {
		var that = this
		$.get('http://localhost:8080/lunbo?page=1&count=7',function (res) {
			var getData = JSON.parse(res).data.billboards
				that.setState({
					data:getData
				});
			
		})
		
		
	}
	render() {
		const hProp = this.state.initialHeight ? { height: this.state.initialHeight } : {};
		return (
			<WingBlank>
				<Carousel
					className="my-carousel"
					autoplay={true}
					infinite
					selectedIndex={1}
					swipeSpeed={35}
					dotStyle={{display:"none"}}
					dotActiveStyle={{display:"none"}}
				>
					{
						this.state.data.map(function (item,index) {
							return(
								<a href={item.url} key={index}>
									<img src={item.imageUrl} />
								</a>
							)
						})
					}
				</Carousel>
			</WingBlank>
		);
	}
}
	
export default Banner;
	
	
