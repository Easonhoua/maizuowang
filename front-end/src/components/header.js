/**
 * Created by Administrator on 2017/7/15 0015.
 */
import React,{ Component } from 'react';
import { HashRouter as Router,  Route, Link, NavLink  } from 'react-router-dom';
import '../css/header.css'
import '../iconfont/iconfont.css'
import $ from 'jquery'

class Header extends Component{
	componentDidMount() {
		window.addEventListener('scroll', this.orderScroll.bind(this));
	}
	render() {
		return (
			<div>
				<header>
					<div className='head-left' onClick={this.moveout.bind(this)}>
						<div className='head-menu'><i className="iconfont">&#xe63d;</i></div>
						<div className='head-title'>卖座电影</div>
					</div>
					<div className='head-right'>
						<div className='address'>深圳<i className="iconfont">&#xe60a;</i></div>
						<div className='selfCenter'><i className="iconfont">&#xe7ab;</i></div>
					</div>
				
				</header>
				<div className='asidelist'>
					<ul className='asideul'>
						<li>
							<NavLink exact  to="/">
								<span>首页</span><i className='iconfont'>&#xe649;</i>
							</NavLink>
						</li>
						<li>
							<NavLink  to="/totallist">
								<span>影片</span><i className='iconfont'>&#xe649;</i>
							</NavLink>
						</li>
						<li>
							<NavLink  to="/cinemas">
								<span>影院</span><i className='iconfont'>&#xe649;</i>
							</NavLink>
						</li>
						<li>
							<NavLink  to="/">
								<span>商城</span><i className='iconfont'>&#xe649;</i>
							</NavLink>
						</li>
						<li>
							<NavLink  to="/">
								<span>演出</span><i className='iconfont'>&#xe649;</i>
							</NavLink>
						</li>
						<li>
							<NavLink  to="/login">
								<span>我的</span><i className='iconfont'>&#xe649;</i>
							</NavLink>
						</li>
						<li>
							<NavLink  to="/loginmain">
								<span>卖座卡</span><i className='iconfont'>&#xe649;</i>
							</NavLink>
						</li>
					</ul>
				</div>
				<div className='gotop' onClick={ this.goTop.bind(this)}>
					<span><i className="iconfont">&#xe631;</i></span>
				</div>
				
			</div>
		
		)
	}
	
	orderScroll() {
		var num=$(window).scrollTop()
		if(num>=240){
			$('.gotop').fadeIn();
		}else{
			$('.gotop').fadeOut();
		}
	}
	
	moveout(){
		var num = parseInt($('.asidelist').width());
		// console.log(num);
		if($('.asidelist').offset().left!=0){
			$('.asidelist').animate({left:0})
		}else{
			$('.asidelist').animate({left:-num})
		}
	}
	
	goTop() {
		
		$('body,html').animate({scrollTop:0},100)
	}

}





export default Header;




