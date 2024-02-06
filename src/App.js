import React from 'react';
import CurrentWeather from './components/CurrentWeather';
import WeatherForm from './components/WeatherForm';
import WeatherList from './components/WeatherList'; // Import WeatherList component
import './App.css';
import data from './data/weatherData';

function App(props) {
  //const weather = data;
 // const loading = false;
 // const error = '';

  return (
    <div className="App">
      <h1>Current Weather Report</h1>
      <WeatherForm />
      {/* Pass the weather data array to WeatherList */}
      <WeatherList weather={weather} />
    </div>
  );
}

export default App;