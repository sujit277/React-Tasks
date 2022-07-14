import { mockedCoursesList, mockedAuthorsList } from './Constants';
import axios from 'axios';

let authorData = mockedAuthorsList;
let courseData = mockedCoursesList;

export const getAllAuthors = () => {
	return authorData;
};

export const addNewAuthor = (item) => {
	authorData.push(item);
};

export const getAllCourses = () => {
	return courseData;
};

export const addNewCourse = (item) => {
	console.log(courseData);
};

export const deleteCourse = (Id) => {
	courseData = courseData.filter((item) => item.id !== Id);
};

export const login = (data) => {
	return axios.post('http://localhost:4000/login', data);
};

export const register = (data) => {
	return axios.post('http://localhost:4000/register', data);
};
