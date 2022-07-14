import { ADDLOGINDATA, DELLOGINDATA } from './types';

const userInitialState = {
	isAuth: false,
	name: '',
	email: '',
	token: '',
};

const userReducer = (state = userInitialState, action) => {
	switch (action.type) {
		case ADDLOGINDATA:
			state = action.payload;
			return state;
		case DELLOGINDATA: {
			state = userInitialState;
			return state;
		}
		default:
			return state;
	}
};

export default userReducer;
