import React from 'react'

const CURRENTWEATHER = (props) => {
    const {currentWeather} = props
    return (<div clas="currentweather">
        <p>Image Current Weather Placeholder</p>
        <h3>{currentWeather.cities}</h3>
        <div>
            <p> Humidiy Picture PlaceHolder</p>
            <h3>{currentWeather.dewpt}</h3>
        </div>
        <div>
            <p> Wind Speed Picture PlaceHolder</p>
            <h3>{currentWeather.wind}</h3>
        </div>
    </div>
    )

}