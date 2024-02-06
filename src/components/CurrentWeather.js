import React from 'react'

const CURRENTWEATHER = (props) => {
    const {weather} = props

    return (<div class="currentWeather">
        <p>Image Current Weather Placeholder</p>
        <h3>{weather.cities}</h3>
        <div>
            <p> Humidiy Picture PlaceHolder</p>
            <h3>{weather.dewpt}</h3>
        </div>
        <div>
            <p> Wind Speed Picture PlaceHolder</p>
            <h3>{weather.wind_spd}</h3>
        </div>
    </div>
    )

}

export default CURRENTWEATHER