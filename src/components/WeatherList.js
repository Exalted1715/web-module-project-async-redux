import React from 'react';
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

export default WeatherList;