import { ADDCOURSE, GETCOURSE, DELETECOURSE } from './types';

//Action for adding new course
export const addCourse = (data) => {
	return { type: ADDCOURSE, payload: data };
};

//Action for deleting specific course
export const deleteCourse = (id) => {
	return { type: DELETECOURSE, payload: id };
};

//Action for getting all courses
export const getCourse = () => {
	return { type: GETCOURSE };
};
