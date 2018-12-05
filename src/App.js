import React, { Component } from 'react';
import Weather from './Weather';

class App extends Component {
	state = {
		data: []
	};

	render() {
		return (
			<div>
				{/* TODO: Navbar on Future*/}
				<p>Local Weather App</p>
				<Weather />
				{/* TODO: Author Footer*/}
			</div>
		);
	}
}

export default App;
