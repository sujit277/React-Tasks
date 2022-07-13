import { addAuth } from './types';

export const AddAuthors = (data) => {
	return {
		type: addAuth,
		payload: data,
	};
};
