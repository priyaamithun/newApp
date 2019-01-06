import React from "react";

const Weather = props => (
	<main className="weather__info">

		{
			props.city && props.country && <p className="weather__key"> Location:
	 		<span className="weather__value"> {props.city}, {props.country}</span>
			</p>
		}
		{
			props.temperature && <p className="weather__key"> Temperature:
	 		<span className="weather__value"> {props.temperature}	</span>
			</p>
		}
		{
			props.humidity && <p className="weather__key"> Humidity:
	 		<span className="weather__value"> {props.humidity} </span>
			</p>
		}
		{
			props.description && <p className="weather__key"> Conditions:
	 		<span className="weather__value"> {props.description} </span>
			</p>
		}
		{
			props.error && <p className="weather__error">{props.error}</p>
		}
	</main>
);

export default Weather;










//this state component

// class Weather extends React.Component{

// render(){ //rendering inputs from app.js components. if the props are presents this <p> will render
//     return(

//         <div> 
//   { this.props.city && this.props.country && <p> Location: {this.props.city},{this.props.country}</p>} 
//   {this.props.humidity && <p> Humidity :{this.props.humidity}</p>}
//   { this.props.temperature && <p>  Temperature : {this.props.temperature}</p>}
//   {this.props.description && <p> Conditions: {this.props.description}</p>}
//   {this.props.error && <p> {this.props.error}</p>}

//         </div>
//     );
// }

// };

