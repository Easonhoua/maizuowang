/**
 * Created by Administrator on 2017/7/15 0015.
 */
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger';


var logger = new createLogger();
var state= {
	getFilmslist:[],
}

var store = createStore(reducer,state,applyMiddleware(thunk,logger))
	
store.createAction = function (action) {
	store.dispatch(action)
}


export default state;