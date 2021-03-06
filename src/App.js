import React from 'react';
import "./App.css";

import Titles from "./compentes/Titles";
import Form from "./compentes/Form";
import Weather from "./compentes/Weather";

const API_KEY = "28bc584831927233c5975d0d5b67c910";

class App extends React.Component {
  state = {
    temperture:undefined,
    country:undefined,
    humidity:undefined,
    description:undefined,
    error:undefined
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call  = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=matric`);
    const data = await api_call.json();
    if (city && country) {
      console.log(data);
  this.setState({
      temperature : data.main.temp,
      id : data.id,
      city : data.name,
      country : data.sys.country,
      humidity : data.main.humidity,
      description : data.weather[0].description,
      error : ""
  })
    }else{
      this.setState({
        temperature:undefined,
        city:undefined,
        country:undefined,
        humidity:undefined,
        description:undefined,
        error:"plese enter the value"
      });
    }

  }
  render(){
    return(
      <div>
      <Titles/>
      <Form getWeather={this.getWeather}/>
      <Weather
      temperature={this.state.temperature}
      city={this.state.city}
      country={this.state.country}
      humidity={this.state.humidity}
      description={this.state.description}
      error={this.state.error}

      />
     

      </div>
    );
  }
};


export default App;
