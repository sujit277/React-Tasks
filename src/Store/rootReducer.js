import findAllCourses from './Courses/reducers';
import findAllAuthors from './Authors/reducers';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({ findAllCourses, findAllAuthors });
export default rootReducer;
