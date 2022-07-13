import { addlogdata, dellogdata } from './types';

export const addLoginData = (data) => {
	return {
		type: addlogdata,
		payload: data,
	};
};

export const delLoginData = () => {
	return {
		type: dellogdata,
	};
};
