import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getWeather } from './actions';

import CurrentWeather from './components/CurrentWeather';
import WeatherForm from './components/WeatherForm';
import WeatherList from './components/WeatherList';

import './App.css';

function App(props) {
  const { loading, error, weather, getWeather } = props;

  useEffect(() => {
    getWeather('');
    
  }, []);

  return (
    <div className="App">
      <h1>Current Weather Report</h1>
      <WeatherForm />
      <WeatherList />
      {(error !== '') && <h3>{error}</h3>}
      {loading ? <h3></h3> : <CurrentWeather weather={weather} />}
      {/* Render CurrentWeather component with weather data */}

      
    </div>
  );
}

const mapStateToProps = state => {
  return {
    loading: state.loading,
    error: state.error,
    weather: state.weather
  };
};

const mapActionsToProps = () => {
  return {
    fetchStart,
    fetchSuccess
  };
};

export default connect(mapStateToProps, { getWeather })(App);