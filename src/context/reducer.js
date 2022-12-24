import { SET_SEARCH_TERM } from './actionTypes'

export const initialState = {
    term: null, 
}

const reducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case SET_SEARCH_TERM:
            return {
                ...state,
                term: action.payload.term
            }
    
        default:
            return state;
    }
}

export default reducer;