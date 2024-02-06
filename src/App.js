import React from 'react';
import {connect} from 'react-redux'
import CurrentWeather from './components/CurrentWeather';
import WeatherForm from './components/WeatherForm';
import WeatherList from './components/WeatherList'; 
import './App.css';


function App(props) {
 
const {loading, error} = props



  return (
    <div className="App">
      <h1>Current Weather Report</h1>
      <WeatherForm />

    {
      (error !== '') && <h3>{error}</h3>
    }
    {
      loading ? <h3>Waiting for Server...</h3> : <WeatherList/>
    }
      
    </div>
  );
}

const mapStateToProps = state => {
  return{
    loading: state.loading,
    error: state.error
  }
}

export default connect(mapStateToProps)(App);