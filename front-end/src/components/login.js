/**
 * Created by Administrator on 2017/7/20 0020.
 */
import React,{ Component } from 'react';
import { HashRouter as Router,  Route, Link, NavLink  } from 'react-router-dom';
import '../css/login.css'
import $ from 'jquery'

class Login extends Component{
	componentDidMount() {
		document.addEventListener('input propertychange', 'users');;
	}
	render(){
		return(
			<div className="formBox">
				<form name="login" action="/loginmain">
					<div className='user'>
						<input type="text" name="username" placeholder='请输入手机号/邮箱' id='users' onKeyUp={this.listen.bind(this)}/>
						<span className='userBoxline'></span>
						<span className='yzm' onClick={this.getnum.bind(this)}>发送验证码</span>
					</div>
					<div className='password'>
						<input type="password" name='pwd' placeholder='请输入密码/验证码'/>
						<span className='pwdBoxline'></span>
						<span className='errortips'></span>
					</div>
					<NavLink  to="/loginmain">
						<button type='submit'>登陆</button>
					</NavLink>
				</form>
			</div>
		)
	}
	
	listen(){
		// console.log($('#users').val())
			if ($('#users').val().length == 11) {
				var reg = /^1\d{10}$/;
				if (!reg.test($('#users').val())) {
					$('.errortips').html('请输入正确的手机号码')
					$('.yzm').hide();
				} else {
					$('.yzm').show();
				}
			}else {
				$('.yzm').hide();
			}
		}
	
		getnum(){
			var num = parseInt(Math.random()*1000000)
			alert(num)
		}
	
	
	
}
export default Login;