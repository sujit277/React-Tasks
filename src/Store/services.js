import { mockedCoursesList } from '../Constants';
import { mockedAuthorsList } from '../Constants';

const getAllCourses = () => {
	return mockedCoursesList;
};

const getAllAuthors = () => {
	return mockedAuthorsList;
};

export { getAllCourses, getAllAuthors };
