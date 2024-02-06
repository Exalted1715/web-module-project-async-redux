import data from './data/weatherData';

const intialState = {
   weather: data,
   loading: false,
   err: '' 
}

const reducer = (state = intialState, action) => {
    switch(action.type){
        default:
            return(state);
    }
}

export default reducer;
