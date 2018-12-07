import React, { Component } from 'react';

class Weather extends Component {
	render() {
		const { name, country, temp, tempScale, weather, weatherDesc, icon } = this.props.weatherData;

		return (
			<div className="weather-row">
				<p>{name}, {country}</p>
				<div>
					<p>{temp} º{tempScale}</p>
				</div>
				<p>{weather}</p>
				<img src={icon} alt={weatherDesc} className="img-responsive img-weather-center" />
			</div>
		);
	}
}

export default Weather;