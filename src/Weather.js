import React from 'react';

const Weather = (props) => {
	const { name, country, temp, tempScale, weather, weatherDesc, icon } = props.weatherData;

	return (
		<div className="weather-row">
			<span>{name}, {country}</span>
			<span>{temp} º<span onClick={props.changeUnit} className="weather-scale">{tempScale}</span></span>
			<span>{weather}</span>
			<img src={icon} alt={weatherDesc} className="img-responsive img-weather-center" />
		</div>
	);
}

export default Weather;