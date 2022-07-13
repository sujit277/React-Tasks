import { addToCourse, deleteCourse, getAllCourses } from '../../services';

const intialState = getAllCourses();

const courseReducer = (state = intialState, action) => {
	if (action.type === 'ADDCOURSE') {
		addToCourse(action.payload);
		state = getAllCourses();
		return state;
	} else if (action.type === 'DELCOURSE') {
		deleteCourse(action.payload);
		state = getAllCourses();
		return state;
	} else {
		return state;
	}
};

export default courseReducer;
