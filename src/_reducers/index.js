import { combineReducers } from 'redux';
import users from './users.reducer';
import alert from './alert.reducer';
import authentication from './authentication.reducer';
import students from './student.reducer'

const rootReducer = combineReducers({
    alert,
    authentication,
    users,
    students
});

export default rootReducer;