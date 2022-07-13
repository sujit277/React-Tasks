import courseReducer from './Courses/reducers';
import authorReducer from './Authors/reducers';
import userDataReducer from './User/reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	courseReducer,
	authorReducer,
	userDataReducer,
});
export default rootReducer;
