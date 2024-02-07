import data from './../data/weatherData';

import { FETCH_START, FETCH_SUCCESS } from '../actions';

const intialState = {
   weather: data,
   loading: false,
   error: '' 
}

const reducer = (state = intialState, action) => {
    switch(action.type){
        case FETCH_START:
        return{
            ...state,
            loading: true,
            error: ''
        }
        case FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                weather: action.payload,
                error: ''
            }
        default:
            return(state);
    }
}

export default reducer;
