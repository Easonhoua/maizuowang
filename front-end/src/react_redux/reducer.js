/**
 * Created by Administrator on 2017/7/15 0015.
 */

function reducer(state,action) {
	switch (action.type) {
		case "GET_FILMLIST":
			return Object.assign({}, state, {
				getFilmslist: action.data
			})
		
		
	}
}
export default reducer;

