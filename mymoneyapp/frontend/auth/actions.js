import { toastr } from 'react-redux-toastr';
import axios from 'axios';
import { API_URL, OAPI_URL } from 'root/constants';

function submit(values, url) {
    return dispatch => {
        axios
            .post(url, values)
            .then(resp => {
                dispatch([{ type: 'USER_FETCHED', payload: resp.data }]);
            })
            .catch(e => {
                console.log(e);
                e.response.data.errors.forEach(error =>
                    toastr.error('Erro', error)
                );
            });
    };
}

export function login(values) {
    return submit(values, `${OAPI_URL}/login`);
}

export function signup(values) {
    return submit(values, `${OAPI_URL}/signup`);
}

export function logout() {
    return { type: 'TOKEN_VALIDATED', payload: false };
}

export function validateToken(token) {
    return dispatch => {
        if (token) {
            axios
                .post(`${OAPI_URL}/validate-token`, { token })
                .then(resp => {
                    dispatch({
                        type: 'TOKEN_VALIDATED',
                        payload: resp.data.valid
                    });
                })
                .catch(e =>
                    dispatch({ type: 'TOKEN_VAIDATED', payload: false })
                );
        } else {
            dispatch({ type: 'TOKEN_VAIDATED', payload: false });
        }
    };
}
