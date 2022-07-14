import courseReducer from './Courses/reducers';
import authorReducer from './Authors/reducers';
import userReducer from './User/reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	courseReducer,
	authorReducer,
	userReducer,
});
export default rootReducer;
