import { addtoAuthors, getAllAuthors } from '../../services';

const intialState = getAllAuthors();

const authorReducer = (state = intialState, action) => {
	if (action.type === 'ADDAUTHORS') {
		addtoAuthors(action.payload);
		state = getAllAuthors();
		return state;
	} else {
		return state;
	}
};

export default authorReducer;
