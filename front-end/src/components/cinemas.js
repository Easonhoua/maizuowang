/**
 * Created by Administrator on 2017/7/18 0018.
 */

import React,{ Component } from 'react';
import '../css/cinemas.css'
import '../iconfont/iconfont.css'
import $ from 'jquery'
import { Accordion, List } from 'antd-mobile';

class Cinemas extends React.Component {
	state = {
		data: [],
	}
	componentDidMount() {
		var that = this;
		var totalArr = [];
		$.get('http://localhost:8080/cinema', function (res) {
			var getData = JSON.parse(res).data.cinemas;
			var arr = [];
			var reg = /^[^\u4e00-\u9fa5\w\s]+/;
			for (var i = 0; i < getData.length; i++) {
				if (arr.indexOf(getData[i].district.name) == -1 && reg.test(getData[i].district.name) == false) {
					arr.push(getData[i].district.name)
				}
			}
			
			for (var j = 0; j < arr.length; j++) {
				var obj = {};
				obj.arrqu = arr[j];
				obj.arrcinemas = [];
				// console.log(obj.arrqu);
				for (var k = 0; k < getData.length; k++) {
					if (arr[j] == getData[k].district.name) {
						obj.arrcinemas.push(getData[k])
					}
				}
				totalArr.push(obj)
			}
			
				that.setState({
					data: totalArr,
				});
		})
		
	}
	
	
	render() {
		return (
			<div style={{paddingTop: 102}}>
				<Accordion className="my-accordion">
					{
						this.state.data.map(function (item1, index1) {
							return(
							<Accordion.Panel header={item1.arrqu} key={index1}>
								{
									item1.arrcinemas.map(function (item2,index2) {
										return(
										<List className="my-list" key={index2}>
											<List.Item>
												<div className='baCinemas'>
													<ul className='baCinemaslist'>
														<li>
															<div className='baCinemasinf'>
																<div className='baCinemasl'>
																	<div className='Cinemasname'>
																		<span className='whatCinemas'>{item2.name}</span>
																		<span className='zuo'>座</span>
																		<span className='yong'>通</span>
																	</div>
																	<div className='activepri'>
																		<span className='cola'>可乐爆米花</span>
																		<span className='youhui'>优惠活动</span>
																	</div>
																	<div className='adrress'>{item2.address}</div>
																	<div className='distance'>距离未知</div>
																</div>
																<div className='baCinemasr'><i className='iconfont'>&#xe649;</i>
																</div>
															</div>
														</li>
													</ul>
												</div>
											</List.Item>
										</List>
										)
									})
								}
								
							</Accordion.Panel>
							)
						})
					}
				</Accordion>
			</div>
		);
	}
}

export default Cinemas;