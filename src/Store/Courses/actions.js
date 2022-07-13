import { addcrse, delcrse } from './types';

export const delCourse = (Id) => {
	return {
		type: delcrse,
		payload: Id,
	};
};

export const AddCourse = (courseData) => {
	return {
		type: addcrse,
		payload: courseData,
	};
};
