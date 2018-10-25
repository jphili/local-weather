import React from "react";
import Form from "./form";
import Weather from "./weather";
import "./App.min.css";
import "./lib/weather-icons.min.css";

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isDetecting: true,
			location: true,
			apiError: false,
			weatherData: false
		}
		this.getWeatherData = this.getWeatherData.bind(this);
	}

	getWeatherData = (event) => {
		event.preventDefault();

		if (event.target.elements.city.value) {
			var countries = require('country-list')();
			const city = event.target.elements.city.value;
			const country = countries.getCode(event.target.elements.country.value);

			fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "," + country + "&units=metric&appid=79f89c2b9c7f0bceb7c4b752918ffeba")
  			.then(response => {
  				if (response.status === 200) {
  					return response.json();	
  				}	
  				else {
  					throw new Error("Location could not be resolved correctly.")
  				}
  			})
  			.then((json => {
  				this.setState({location: true, apiError: false, weatherData: json})
  				console.log(this.state.location);
  			}))
  			.catch((error) => {
  				this.setState({apiError: true})
  			})
  		}
  		else {		// no location given
  			this.setState({location: false})
  			this.setState({apiError: false})	
  		}
  	}
	
	render() {
		return (
			<div className="App">
				<header>
					<h1>Local Weather</h1>
				</header>
				<div id="frosted-bg">
					<div id="content">
						<input type="checkbox" id="toggle-menu" />
						<label htmlFor="toggle-menu">
							<div></div>
							<div></div>
							<div></div>
						</label>
						<Form weatherFromLocation={this.getWeatherData} />
						
						{!this.state.apiError ?
							!this.state.location ? 
								(<p>Please enter a location.</p>) :
								(this.state.weatherData && <Weather weatherData={this.state.weatherData} />)
						: (<p>Location could not be resolved correctly. Please check for spelling mistakes.</p>)
						}
					</div>
				</div>
				<footer>{'\u00A9'} The Weather Project 2018</footer>
			</div>
		);
	}
}


