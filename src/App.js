import React, { Component } from 'react';
import Title from "./Components/Title";
import Form from "./Components/Form";
import Weather from "./Components/Weather";
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './app.css';
import { Button, Card, CardBody, CardImage, CardTitle, CardText, Col } from 'mdbreact';
import { MDBBtn } from "mdbreact";

const API_KEY = "ae5e37db2d45a69f977d060ebc13045d";

class App extends React.Component {

  state = {            //state is an object lies inside the class 
    //here we are reseting the values
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

  getWeather = async (e) => { //e is referred as event handler in js
    e.preventDefault(); // it will prevent whole page refresh
    const city = e.target.elements.city.value; // here we are targeting elements in form tag
    const country = e.target.elements.country.value;

    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}`);

    const data = await api_call.json(); //getting inputs from json
    if (city && country) { //if the inputs are valid 
      console.log(data);

      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });
    }
    else {

      //if the inputs are not valid
      this.setState({

        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter a value."
      });
    }


  }



  render() { //rendering inputs from different components and here passing props
    if (this.state.city && this.state.country) {
      return (
        <div>
          <div className="forms clearfix">
            <Form getWeather={this.getWeather} />
          </div>
          <MDBBtn outline color="white" className="weather_info">
            <Weather className="clearfix"
              temperature={this.state.temperature}
              humidity={this.state.humidity}
              city={this.state.city}
              country={this.state.country}
              description={this.state.description}
              error={this.state.error}
            />
          </MDBBtn>


        </div>


      );
    }
    else {
      return (
        <div>

          <Title className="clearfix" />


          <div className="forms clearfix">
            <Form getWeather={this.getWeather} />
          </div>
          <Weather
            temperature={this.state.temperature}
            humidity={this.state.humidity}
            city={this.state.city}
            country={this.state.country}
            description={this.state.description}
            error={this.state.error}
          />

        </div>
      );
    }
  }
};

export default App;