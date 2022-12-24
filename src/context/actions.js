import {SET_SEARCH_TERM} from './actionTypes';

export const setSearchTerm = term => ({
    type: SET_SEARCH_TERM,
    payload: {
        term 
    }     
})