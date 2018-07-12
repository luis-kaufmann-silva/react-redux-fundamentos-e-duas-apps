import axios from 'axios';
import { API_URL } from 'root/constants';

export function getSummary() {
    const request = axios.get(`${API_URL}/billing-cycle/summary`);
    return {
        type: 'BILLING_SUMMARY_FETCHED',
        payload: request
    };
}
