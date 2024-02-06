import React from 'react';
import { connect } from 'react-redux';
import CurrentWeather from './CurrentWeather'
import WeatherForm from './WeatherForm';
import './App.css';
//import { data } from 'msw/lib/types/context';

function App(props) {
  const currentWeather = data
  const loaind = false
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