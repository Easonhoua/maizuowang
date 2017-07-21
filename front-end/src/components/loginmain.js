/**
 * Created by Administrator on 2017/7/20 0020.
 */
import React,{ Component } from 'react';
import { List, Badge } from 'antd-mobile';
import '../css/loginmain.css'
import '../iconfont/iconfont.css'


class Loginmain extends Component{
	render(){
		return(
		<div className='loginbox'>
			<div className='userinf'>
				<div className='photo'>图片</div>
				<div className='haha'>
					<div className='usern'>手机用户</div>
					<div className='userid'>ID:8384387</div>
					<a href='#'>退出</a>
				</div>
			</div>
			<div className='loginlist'>
				<div className='ypdd same'>
					<div className='ypdd-in inner'>
						<span className='innerl'>影票订单</span>
						<span className='innerr'>0张<i className='iconfont'>&#xe649;</i></span>
					</div>
				</div>
				<div className='dfdd same'>
					<div className='dfdd-in inner'>
						<span className='innerl'>影票待付订单</span>
						<span className='innerr'>0张<i className='iconfont'>&#xe649;</i></span>
					</div>
				</div>
				<div className='scdd same'>
					<div className='scdd-in inner'>
						<span className='innerl'>商城订单</span>
						<span className='innerr'><i className='iconfont'>&#xe649;</i></span>
					</div>
				</div>
				<div className='ycdd same'>
					<div className='ycdd-in inner'>
						<span className='innerl'>演出订单</span>
						<span className='innerr'><i className='iconfont'>&#xe649;</i></span>
					</div>
				</div>
				<div className='wdxjq some'>
					<div className='wdxjq-in inner'>
						<span className='innerl'>我的现金券</span>
						<span className='innerr'>0张<i className='iconfont'>&#xe649;</i></span>
					</div>
				</div>
				<div className='zhye some'>
					<div className='zhye-in inner'>
						<span className='innerl'>账户余额</span>
						<span className='innerr'>0元<i className='iconfont'>&#xe649;</i></span>
					</div>
				</div>
				<div className='wdmzk some'>
					<div className='wdmzk-in inner'>
						<span className='innerl'>我的卖座卡</span>
						<span className='innerr'>0张<i className='iconfont'>&#xe649;</i></span>
					</div>
				</div>
				<div className='sz same'>
					<div className='sz-in inner'>
						<span className='innerl'>设置</span>
					</div>
				</div>
			</div>
		</div>
		)
	}
}

export default Loginmain;