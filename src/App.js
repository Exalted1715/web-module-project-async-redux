import React from 'react';
import {connect} from 'react-redux'
import { fetchStart } from './actions';
import { useEffect } from 'react';
import CurrentWeather from './components/CurrentWeather';
import WeatherForm from './components/WeatherForm';
import WeatherList from './components/WeatherList'; 
import './App.css';
import axios from 'axios';

function App(props) {
 
const {loading, error} = props

useEffect(() => {
  props.fetchStart();
  axios.get('https://api.weatherbit.io/v2.0/current?&postal_code=83709&key=f899a6ac8b82427bb2ed20e594ccad85')
    .then(res =>{
      console.log(res)
    })
}, []);

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

const mapActionsToProps = () => {
  return{
    fetchStart
  }
}

export default connect(mapStateToProps, {fetchStart})(App);