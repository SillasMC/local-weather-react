import React, { Component } from 'react';
import axios from 'axios';
import Weather from './Weather';
import Author from './Author';

class App extends Component {
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

	componentDidMount() {
		const baseUrl = 'https://fcc-weather-api.glitch.me/api/current';
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition((pos) => {
				let url = `${baseUrl}?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}`;

				axios.get(url)
					.then(({data}) => {
						let standardData = {
							name: data.name,
							country: data.sys.country,
							temp: data.main.temp,
							tempScale: 'C',
							weather: data.weather[0].main,
							weatherDesc: data.weather[0].description,
							icon: data.weather[0].icon
						};
						this.setState(standardData);
					})
					.catch(error => console.error(error));
			});
		}
	}

	render() {
		return (
			<div className="main-div">
				{/* TODO: Navbar on Future*/}
				<div className="app-row">
					<span className="app-cell">Local Weather App</span>
					<i className="pl10 app-cell fa fa-cloud"></i>
				</div>
				<Weather weatherData={this.state} />
				<Author />
			</div>
		);
	}
}

export default App;
