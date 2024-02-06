import data from './../data/weatherData';

import { FETCH_START } from '../actions';

const intialState = {
   weather: [],
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
        default:
            return(state);
    }
}

export default reducer;
