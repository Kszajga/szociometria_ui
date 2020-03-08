import { studentConstants } from './../constants/student.constants';

export default function students(state = {}, action) {
    console.log("STUDENTS -> action", action)
    switch (action.type) {
        case studentConstants.GET_ALL_BY_USER:
            return {
                loading: true
            };
        case studentConstants.GET_ALL_BY_USER_SUCCESS:
            return {
                students: action.students
            };
        case studentConstants.GET_ALL_BY_USER_FAILURE:
            return {
                error: action.error
            };
        default:
            return state
    }
}