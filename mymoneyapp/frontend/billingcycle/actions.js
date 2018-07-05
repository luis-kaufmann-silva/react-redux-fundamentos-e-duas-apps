import axios from 'axios';
import { toastr } from 'react-redux-toastr';

import { reset as resetForm, initialize } from 'redux-form';
import { selectTab, showTabs } from 'common/tab/actions';

const BASE_URL = 'http://localhost:3003/api';

const INITIAL_VALUES = {
    credits: [{}]
};
export function getList() {
    const request = axios.get(`${BASE_URL}/billing-cycle`);
    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    };
}

function submit(values, method) {
    return dispatch => {
        const id = values._id ? values._id : '';
        axios[method](`${BASE_URL}/billing-cycle/${id}`, values)
            .then(resp => {
                toastr.success('Success', 'Operação realizada com sucesso');
                dispatch(init());
            })
            .catch(err => {
                err.response.data.errors.forEach(e => toastr.error('Erro', e));
            });
    };
}

export function remove(values) {
    return submit(values, 'delete');
}

export function update(values) {
    return submit(values, 'put');
}

export function create(values) {
    return submit(values, 'post');
}

export function showUpdate(bc) {
    return [
        showTabs('tabEdit'),
        selectTab('tabEdit'),
        initialize('billing-cycle-form', bc)
    ];
}

export function showDelete(bc) {
    return [
        showTabs('tabDelete'),
        selectTab('tabDelete'),
        initialize('billing-cycle-form', bc)
    ];
}

export function init() {
    return [
        showTabs('tabList', 'tabAdd'),
        selectTab('tabList'),
        getList(),
        initialize('billing-cycle-form', INITIAL_VALUES)
    ];
}
