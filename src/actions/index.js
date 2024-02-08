import axios from 'axios';
export const FETCH_START = 'FETCH_Start';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';



export const getWeather = (searchTerm) => {
    return(dispatch =>{

        dispatch(fetchStart())
        return axios.get(`https://api.weatherbit.io/v2.0/current?&postal_code=${searchTerm}&key=f899a6ac8b82427bb2ed20e594ccad85`)
          .then(res => {
            
           dispatch(fetchSuccess(res.data.data[0]));
          })
          .catch(error => {
            // You can dispatch an action for error handling here if needed
            console.error('Error fetching weather data:', error);
        });
          
    });
}

export const fetchStart = () => {
    return({type: FETCH_START})
}

export const fetchSuccess = weather =>{
    return({type:FETCH_SUCCESS, payload: weather})
}