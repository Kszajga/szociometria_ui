import { config } from './user.service';
import { handleResponse } from './user.service';
import { authHeader } from '../_helpers/auth-headers';
export const studentService = {
    add,
    edit,
    remove,
    select,
    getAllByUser
}

function add(student) {
    const requestOptions = {
        method: 'POST',
        headers: authHeader(),
        body: JSON.stringify({ student })
    };

    return fetch(`${config.apiUrl}/student/add`, requestOptions)
        .then(handleResponse)
        .then(students => {
            console.log(students);
            return students;
        });
}

function getAllByUser() {
    let user = JSON.parse(localStorage.getItem('user'));
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        headers: authHeader(),
        body: JSON.stringify({ user_id: user.id })
    };

    return fetch(`${config.apiUrl}/student/getAllByUserId`, requestOptions)
        .then(handleResponse)
        .then(students => {
            console.log(students);
            return students;
        });
}

function edit() {

}

function remove() {

}

function select() {

}