import React, { Component } from 'react';
import axios from 'axios';
import Weather from './Weather';

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
		const url = 'https://fcc-weather-api.glitch.me/api/current?lat=-3.7650466999999996&lon=-38.5577689';

		axios.get(url)
			.then(({data}) => {
				var standardData = {
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
	}

	render() {
		return (
			<div className="main-div">
				{/* TODO: Navbar on Future*/}
				<p className="temp-row">Local Weather App  <i className="pl10 fa fa-cloud"></i></p>
				<Weather weatherData={this.state} />
				{/* TODO: Author Footer*/}
			</div>
		);
	}
}

export default App;
