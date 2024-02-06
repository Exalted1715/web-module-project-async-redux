import React from 'react';
import {connect} from 'react-redux';
import CurrentWeather from './CurrentWeather';

const WeatherList = (props) => {
    const { weather } = props;

    return (
        <div id="weather">
            {weather.map((weatherItem, index) => (
                <CurrentWeather key={index} weather={weatherItem} />
            ))}
        </div>
    );
}
const mapStateToProps= state =>{
    return {
        weather: state.weather
    }
}

export default connect(mapStateToProps)(WeatherList);