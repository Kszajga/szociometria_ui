import { combineReducers } from 'redux';
import users from './users.reducer';
import alert from './alert.reducer';
import authentication from './authentication.reducer';

const rootReducer = combineReducers({
    alert,
    authentication,
    users
});

export default rootReducer;