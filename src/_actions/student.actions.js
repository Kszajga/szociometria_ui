import { studentService } from "../_services/student.service";
import { alertActions } from "./alert.actions";
import { studentConstants } from "../constants/student.constants";

export const studentActions = {
    getAllByUser,
    add
};

function getAllByUser() {
    return dispatch => {
        dispatch(request());

        studentService.getAllByUser()
            .then(
                students => {
                    console.log("getAllByUser -> students", students)
                    dispatch(success(students));
                },
                errors => {
                    dispatch(failure(errors));
                    dispatch(alertActions.error(errors));
                }
            );
    };

    function request(students) { return { type: studentConstants.GET_ALL_BY_USER, students } }

    function success(students) { return { type: studentConstants.GET_ALL_BY_USER_SUCCESS, students } }

    function failure(error) { return { type: studentConstants.GET_ALL_BY_USER_FAILURE, error } }

};

function add() {}