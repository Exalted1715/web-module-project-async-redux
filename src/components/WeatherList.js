import react from 'react'
import CURRENTWEATHER from './CurrentWeather'

const WeatherList = props => {
    const {weather} = props
    return (<div id="weather">
        {
            weather.map(weather =>{
                return(
                    <CURRENTWEATHER weather={weather}/>
                )
            })
        }
    </div>

    )
}

export default WeatherList