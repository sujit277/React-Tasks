import { mockedCoursesList } from './Constants';
import { mockedAuthorsList } from './Constants';

let authorData = mockedAuthorsList;
let courseData = mockedCoursesList;

const getAllCourses = () => {
	return courseData;
};
const addToCourse = (item) => {
	courseData.push(item);
	console.log(courseData);
};

const deleteCourse = (Id) => {
	courseData = courseData.filter((item) => item.id !== Id);
};

const getAllAuthors = () => {
	return mockedAuthorsList;
};

const addtoAuthors = (item) => {
	authorData.push(item);
};

export {
	getAllCourses,
	getAllAuthors,
	addToCourse,
	addtoAuthors,
	deleteCourse,
};
