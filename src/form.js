import React from "react";

// uncontrolled/stateless form
const LocationForm = (props) => {
	return (
		<form onSubmit={props.weatherFromLocation}>
			<p>
				<label htmlFor="city">City: </label>
				<input type="text" name="city" />
				<label htmlFor="country">Country: </label>
				<input type="text" name="country" />
				<button type="submit">Submit</button>
			</p>
		</form>
	);
}
	
export default LocationForm; 
