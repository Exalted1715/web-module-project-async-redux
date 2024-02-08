import React from 'react';


const CurrentWeather = (props) => {
    const { weather } = props;

    if (!weather) {
        return <div>Loading...</div>; // Or any other placeholder or loading indicator
    }
    const weatherDescription = weather.weather && weather.weather.description;
    const iconClass = weather.weather && weather.weather.icon
    return (
        <div className="currentWeather">
          <i className={iconClass} />
            
            <h3>{weather.temp} Celsius</h3>
            <h3>{weatherDescription}</h3>
            <h3>{weather.city_name}</h3> 

            <div>
                <p> Humidity Picture Placeholder</p> 
                <h3>{weather.dewpt}</h3> 
                <p>Humidity</p>
            </div>
            <div>
                <p> Wind Speed Picture Placeholder</p>
                <h3>{weather.wind_spd}</h3> 
                <p>Wind</p>
            </div>
        </div>
    );
}

const getIconClass = (iconCode) => {
    // Mapping data
    const iconMappings = {
        '01d': 'fas fa-sun', // clear sky (day)
        '01n': 'fas fa-moon', // clear sky (night)
        '02d': 'fas fa-cloud-sun', // few clouds (day)
        '02n': 'fas fa-cloud-moon', // few clouds (night)
        // Add more mappings here based on your provided data
    };

    // Return the corresponding icon class, or a default one if not found
    return iconMappings[iconCode] || 'fas fa-question'; // Default icon class for unknown weather
}


export default CurrentWeather;