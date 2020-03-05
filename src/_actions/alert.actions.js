import { alertConstants } from './../constants/alert.constants';

export const alertActions = {
    success,
    error,
    clear
};

function success(message) {
    return { type: alertConstants.SUCCESS, message };
}

function error(errors) {
    return { type: alertConstants.ERROR, errors };
}

function clear() {
    return { type: alertConstants.CLEAR };
}