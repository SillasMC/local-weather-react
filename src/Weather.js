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
			icon: ''
		};

		this.state = this.initialState;
	}

	render() {
		const { name, country, temp, tempScale, weather, weatherDesc, icon } = this.state;

		return (
			<div>
				<p>{name}, {country}</p>
				<div>
					<p>{temp} º{tempScale}</p>
				</div>
				<p>{weather}</p>
				<img src={icon} alt={weatherDesc}/>
			</div>
		);
	}
}

export default Weather;