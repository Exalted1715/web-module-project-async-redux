import data from './../data/weatherData';

const intialState = {
   weather: data,
   loading: false,
   error: '' 
}

const reducer = (state = intialState, action) => {
    switch(action.type){
        default:
            return(state);
    }
}

export default reducer;
