import React from 'react';
import { connect } from 'react-redux';
import CurrentWeather from './CurrentWeather';

const WeatherList = (props) => {
    const { weather } = props;

    // Check if weather is not an array or is empty
    if (!Array.isArray(weather) || weather.length === 0) {
        return <div>No weather data available</div>; // Or any other placeholder
    }

    return (
        <div id="weather">
            {weather.map((weatherItem, index) => (
                <CurrentWeather key={index} weather={weatherItem} />
            ))}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        weather: state.weather
    }
}

export default connect(mapStateToProps)(WeatherList);
