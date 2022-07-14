import { getAllCourses, addNewCourse, deleteCourse } from '../../services';
import { ADDCOURSE, DELETECOURSE, GETCOURSE } from './types';

const intialCourseState = [];

const courseReducer = (state = intialCourseState, action) => {
	switch (action.type) {
		case ADDCOURSE:
			addNewCourse(action.payload);
			state = getAllCourses();
			return state;
		case DELETECOURSE:
			deleteCourse(action.payload);
			state = getAllCourses();
			return state;
		case GETCOURSE:
			state = getAllCourses();
			return state;
		default:
			return state;
	}
};

export default courseReducer;
