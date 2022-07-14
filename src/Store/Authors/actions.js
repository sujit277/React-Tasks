import { ADDAUTHOR, GETAUTHOR } from './types';

//Action for getting Author details
export const getAuthor = () => {
	return { type: GETAUTHOR };
};

//Action for adding new Author
export const addAuthor = (data) => {
	return {
		type: ADDAUTHOR,
		payload: data,
	};
};
