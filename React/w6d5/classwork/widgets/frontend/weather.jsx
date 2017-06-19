import React from 'react';

class Weather extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      weather: null,
      location: null
    }
    this.pollWeather = this.pollWeather.bind(this);
  }

  componentDidMount() {
    //I don't know why this works
    let that = this;
    navigator.geolocation.getCurrentPosition( function(location) {
      that.pollWeather(location);
    });
  }

  pollWeather(location) {
    let lat = location.coords.latitude.toString().slice(0,7);
    let lon = location.coords.longitude.toString().slice(0,7);
    let url = 'http://api.openweathermap.org/data/2.5/weather?'
  // api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}
    const apiKey = '594c97173d9cb7059a636854f890425b';

    url += `lat=${lat}&lon=${lon}&APPID=${apiKey}`

    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = () => {
      //ready state of DONE means this is complete
      if (xmlhttp.status === 200 && xmlhttp.readyState === XMLHttpRequest.DONE) {
        const data = JSON.parse(xmlhttp.responseText);
        console.log(data);
        this.setState({weather: data});
      }
    }

    xmlhttp.open('GET', url, true);
    xmlhttp.send();
  }

  render () {
    let content = <div></div>

    if (this.state.weather) {
      let weather = this.state.weather;
      let temp = this.state.weather.main.temp;
      content = <div>
        <h1>Weather</h1>
          <div className="weather">
          <p className="flex-container space-between">
            <span className="flex-item">{this.state.weather.name}</span>
            <span className="flex-item">{temp} degrees K</span>
          </p>
        </div>
      </div>
    } else {
      content =
        <div className="loading">
          <h1>Weather</h1>
          <h2>Loading weather...</h2>
          </div>
    }
    return content;
  }
}

export default Weather;
