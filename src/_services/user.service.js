// import config from './../../webpack.config';
import { authHeader } from '../_helpers/auth-headers';
import { history } from './../_helpers/history';
export const config = {
    apiUrl: 'http://localhost:4000'
};

export const userService = {
    login,
    logout,
    getAll
};

function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };

    return fetch(`${config.apiUrl}/admin/login`, requestOptions)
        .then(handleResponse)
        .then(user => {
            console.log("TCL: login -> user", user)
                // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(user));
            return user;
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/admin`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    console.log("handleResponse -> response", response);
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401 || response.status === 403) {
                // auto logout if 401 response returned from api
                logout();
                location.reload(true);
            }

            const error = (data && data.errors) || response.statusText;
            return Promise.reject(error);
        }

        console.log("TCL: handleResponse -> data", data)
        return data;
    });
}