import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getWeather } from '../actions';

const WeatherForm = (props) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSubmit = (evt) => {
        evt.preventDefault(); // Prevent default form submission behavior
        props.getWeather(searchTerm);
    }

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={searchTerm} onChange={handleChange} />
            <button type="submit">Search</button>
        </form>
    );
}

export default connect(null, { getWeather })(WeatherForm);