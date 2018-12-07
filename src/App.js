import React, { Component } from 'react';
import Weather from './Weather';

class App extends Component {
	state = {
		data: []
	};

	// componentDidMount() {
	// 	const url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*";
	//
	// 	fetch(url)
	// 		.then(result => result.json())
	// 		.then(result => {
	// 			this.setState({
	// 				data: result
	// 			})
	// 		});
	// }

	render() {
		return (
			<div className="main-div">
				{/* TODO: Navbar on Future*/}
				<p className="temp-row">Local Weather App  <i className="pl10 fa fa-cloud"></i></p>
				<Weather />
				{/* TODO: Author Footer*/}
			</div>
		);
	}
}

export default App;
