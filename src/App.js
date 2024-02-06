import React from 'react';
import {connect} from 'react-redux'
import CurrentWeather from './components/CurrentWeather';
import WeatherForm from './components/WeatherForm';
import WeatherList from './components/WeatherList'; // Import WeatherList component
import './App.css';


function App(props) {
  //const weather = data;
 // const loading = false;
 // const error = '';

 
const {loading, weather} = props

  return (
    <div className="App">
      <h1>Current Weather Report</h1>
      <WeatherForm />
      {/* Pass the weather data array to WeatherList */}
      <WeatherList weather={weather} />
    </div>
  );
}

const mapStateToProps = state => {
  return{
    weather: state.weather,
    loading: state.loading
  }
}

export default connect(mapStateToProps)(App);