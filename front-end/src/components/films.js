/**
 * Created by Administrator on 2017/7/18 0018.
 */
import React,{ Component } from 'react';
import '../iconfont/iconfont.css'
import '../css/films.css'
import $ from 'jquery'




class Filmslist extends Component{
	 state ={
		data:[]
	}
	
	componentDidMount(){
		var that = this;
		$.get("http://localhost:8080/nowplaying?page=1&count=7",function (res) {
			var getFilmslist = JSON.parse(res).data.films
				that.setState({
					data:getFilmslist
				});
			
		})
	}
	render(){
		return(
			<div className="playing">
				<ul className='playinglist'>
					{
						this.state.data.map(function (item,index) {
							return(
								<li key={index}>
									<div className="information">
										<div className="inf-left">
											<img src={item.poster.thumbnail}/>
										</div>
										<div className="inf-right">
											<div className="inf-rightt">
													<span className='pl'>{item.name}</span>
													<span className='pr'>{item.grade}<i className='iconfont'>&#xe649;</i></span>
											</div>
											<div className="inf-rightc">
												{item.intro}
											</div>
											<div className="inf-rightb">
												<span>{item.cinemaCount}</span>家影院上映
												　　　<span>{item.watchCount}</span>人购票
											</div>
										</div>
									</div>
								</li>
							)
						})
					}
					
				</ul>
				
			</div>
		)
	}
}


// var Filmslist = connect(
// 	function (state,ownProps) {
// 		return{
// 			getFilmslists:state.getFilmslists
// 		}
// 	},
//
// {
// 	getFilmslist:function (data) {
// 		return {
// 			type:'GET_FILMLIST',
// 			data:data
// 		}
// 	}
// })(Filmslists)


export default Filmslist;