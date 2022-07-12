import { getAllCourses } from '../services';

const intialState = [];
const findAllCourses = (state = intialState, action) => {
	if (action.type === 'GETALLCOURSES') {
		state = getAllCourses();
		return state;
	} else {
		return state;
	}
};

export default findAllCourses;
