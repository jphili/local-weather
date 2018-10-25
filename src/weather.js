import React from "react";

export default class Weather extends React.Component {

			/*city: this.props.weatherData.name,
			country: this.props.weatherData.sys.country,
			temperature: this.props.weatherData.main.temp,
			humidity: this.props.weatherData.main.humidity,
			main: this.props.weatherData.weather[0].main,
			description: this.props.weatherData.weather[0].description,
			icon: this.props.weatherData.weather[0].icon*/

	render() {
		return (
			<div id="weather-container">
				<h3>Weather for {this.props.weatherData.name}, {this.props.weatherData.sys.country}</h3>
				<div id="weather-wrapper">
					<div id="icon">
						<i className={"wi wi-owm-" + this.props.weatherData.weather[0].id}></i>
						{Math.round(this.props.weatherData.main.temp)}<i className="wi wi-celsius"></i>
					</div>
					<p>{this.props.weatherData.weather[0].description}</p>
					<div id="w-details-wrapper">
						<div className="w-details"><i className="wi wi-thermometer"></i>{this.props.weatherData.main.temp_min}<i className="wi wi-celsius"></i>/{this.props.weatherData.main.temp_max}<i className="wi wi-celsius"></i></div>
						<div className="w-details"><i className="wi wi-humidity"></i>{this.props.weatherData.main.humidity}%</div>
						<div className="w-details"><i className="wi wi-strong-wind"></i>{Math.round(this.props.weatherData.wind.speed*3.6)} km/h</div>
					</div>
				</div>
			</div>
		);
	}
}