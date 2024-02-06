import React from 'react';
import { connect } from 'react-redux';
import CurrentWeather from './components/CurrentWeather'
import WeatherForm from './components/WeatherForm';
import './App.css';
import { data } from './weatherData'

function App(props) {
  const weather = data
  const loading = false
  const error = ''

  return (
    <div className="App">
      <h1>Current Weather Report</h1>
      <WeatherForm />
      
    {
      loading ? <h3>Loading...</h3> : <CurrentWeather currentWeather={weather}/>
    }


    </div>
  );
}

export default App;