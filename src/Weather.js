import React, { Component } from 'react';

class Weather extends Component {
	constructor(props) {
		super(props);

		this.initialState = {
			name: '',
			country: '',
			temp: 0,
			tempScale: 'C',
			weather: '',
			weatherDesc: 'image',
			icon: 'https://www.w3schools.com/w3css/img_lights.jpg'
		};

		this.state = this.initialState;
	}

	render() {
		const { name, country, temp, tempScale, weather, weatherDesc, icon } = this.state;

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