import { getAllAuthors } from '../services';

const intialState = [];
const findAllAuthors = (state = intialState, action) => {
	if (action.type === 'GETALLAUTHORS') {
		state = getAllAuthors();
		return state;
	} else {
		return state;
	}
};

export default findAllAuthors;
