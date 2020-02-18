import axios from "axios";
// var testData = require('data/testdata.json');

export const FETCH_DATA = 'FETCH_DATA';

export const fetchData = (data) => {
    return {
        type: FETCH_DATA,
        data
    };
};

export function fetchAllData(){
    return (dispatch) => {
        return axios.get('/data/testdata.json')
            .then((response) => {
                dispatch(fetchData(response.data))
            })
            .catch((err) => {
                console.log(err);
            });
    };
};