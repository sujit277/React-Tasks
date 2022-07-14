import { ADDLOGINDATA, DELLOGINDATA } from './types';

export const addLoginData = (data) => {
	return {
		type: ADDLOGINDATA,
		payload: data,
	};
};

export const delLoginData = () => {
	return {
		type: DELLOGINDATA,
	};
};
