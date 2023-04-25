/**
 * @author Axel D. Rubio Martin del Campo 
 * @date 24/03/2023
 * @description this file implements a abstraction layer over axios http client
 */
import {
    accessDeniedRedirect,
} from './Redirect';

import axios from 'axios';

const baseURL = 'http://localhost:8080';

axios.interceptors.response.use((response) => {
    return response;
}, (error) => {
    if (error.response && error.response.data) {
        return accessDeniedRedirect;
    }
});

/**
 * This class wrap returns all the basic http request using axios
 */
const ApiRequestFactory = {
    /**
     * This function returns a promise from http get request
     * @param {string} url api url 
     * @param {*} params 
     * @param {json} data to send
     * @returns promise
     */
    get(url = '/', params = {}, data = {}) {
        return axios({
            method: 'get',
            url: baseURL + url,
            params,
            data,
        });
    },

    /**
     * This function return a promise from a http post request
     * @param {string} url api url to request
     * @param {json} data data to send
     * @returns promise
     */
    post(url = '/', data = {}) {
        return axios({
            method: 'post',
            url: baseURL + url,
            data,
        });
    },

    /**
     * This function return a promise from a http post request whit a blob response type
     * @param {string} url api url to request
     * @param {json} data data to send
     * @returns promise
     */
    postBlob(url = '/', data = {}) {
        return axios({
            method: 'post',
            url: baseURL + url,
            data,
            responseType: 'blob'
        });
    },
    
    /**
     * This function return a promise from a http put request
     * @param {string} url api url to request
     * @param {json} data data to send
     * @returns promise
     */
    put(url = '/', data = {}) {
        return axios({
            method: 'put',
            url: baseURL + url,
            data,
        });
    },

    /**
     * This function return a promise from a http patch request
     * @param {string} url api url to request
     * @param {json} data data to send
     * @returns promise
     */
    patch(url = '/', data = {}) {
        return axios({
            method: 'patch',
            url: baseURL + url,
            data,
        });
    },

    /**
     * This function return a promise from a http delete request
     * @param {string} url api url to request
     * @param {json} data data to send
     * @returns promise
     */
    delete(url = '/', data = {}) {
        return axios({
            method: 'delete',
            url: baseURL + url,
            data,
        });
    },

};

export default ApiRequestFactory;