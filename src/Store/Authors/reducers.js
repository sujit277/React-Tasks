import { getAllAuthors, addNewAuthor } from '../../services';
import { ADDAUTHOR, GETAUTHOR } from './types';

const intialAuthorState = [];

const authorReducer = (state = intialAuthorState, action) => {
	switch (action.type) {
		case ADDAUTHOR:
			addNewAuthor(action.payload);
			state = getAllAuthors();
			return state;
		case GETAUTHOR:
			state = getAllAuthors();
			return state;
		default:
			return state;
	}
};

export default authorReducer;
