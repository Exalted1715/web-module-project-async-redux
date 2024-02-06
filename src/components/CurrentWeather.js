import React from 'react';

const CurrentWeather = (props) => {
    const { weather } = props;

    return (
        <div className="currentWeather">
            <p>Image Current Weather Placeholder</p>
            <h3>{weather.city_name}</h3> {/* Assuming city_name is the correct property */}
            <div>
                <p> Humidity Picture Placeholder</p> {/* Corrected spelling of "Humidity" */}
                <h3>{weather.dewpt}</h3> {/* Assuming dewpt is the correct property */}
                <p>Humidity</p>
            </div>
            <div>
                <p> Wind Speed Picture Placeholder</p>
                <h3>{weather.wind_spd}</h3> {/* Assuming wind_spd is the correct property */}
                <p>Wind</p>
            </div>
        </div>
    );
}

export default CurrentWeather;