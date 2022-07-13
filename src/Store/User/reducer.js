const userInitialState = {
	isAuth: false,
	name: '',
	email: '',
	token: '',
};

const userDataReducer = (state = userInitialState, action) => {
	if (action.type === 'ADDLOGINDATA') {
		state = action.payload;
		console.log(state);
		return state;
	} else if (action.type === 'DELLOGINDATA') {
		state = userInitialState;
		return state;
	} else {
		return state;
	}
};

export default userDataReducer;
