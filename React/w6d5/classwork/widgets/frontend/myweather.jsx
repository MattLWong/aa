import React from 'react';

window.me = null;

class Weather extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      weather: null
    };
    me = this.state;
    this.pollWeather = this.pollWeather.bind(this);
  }

  componentDidMount() {
    const that = this;
    navigator.geolocation.getCurrentPosition( function(position) {
      that.pollWeather(position)
    })
  }

  pollWeather(position) {
    let that = this;
    const lat = position.coords.latitude.toString().slice(0,7);
    const lon = position.coords.longitude.toString().slice(0,7);
    let url = 'http://api.openweathermap.org/data/2.5/forecast/daily?'
    const apiKey = '594c97173d9cb7059a636854f890425b'
    url += `lat=${lat}&lon=${lon}&APPID=${apiKey}`
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if(xhr.readyState === XMLHttpRequest.DONE && xhr.status == 200) {
        let responseObj = JSON.parse(xhr.responseText);
        debugger;
        this.setState({weather: data});
      }
    }
    console.log(url);
    xhr.open("GET", url, true)
    xhr.send();
  }

  render() {
    let week = {};
    for (let i = 0; i < 7; i++) {
      week[i] = {
        dateInt: (Date.now() - 25200000 + 86400000 * i)
      };
    }
    for (let i = 0; i < 7; i++) {
      week[i].day = (new Date(week[0].dateInt + 86400000 * i)).toDateString().slice(0,3);
    }

    let div = <h1>Hello</h1>;

    if (this.state.weather) {
      div = <div>
        <h1>Weather</h1>
        <h2>{}</h2>
      <table>
      <tbody>
        <tr>
          <th>Day</th>
          <th>{week[0]}</th>
          <th>1</th>
          <th>2</th>
          <th>3</th>
          <th>4</th>
          <th>5</th>
          <th>6</th>
        </tr>
        <tr>
          <td>High</td>
        </tr>
        <tr>
          <td>Low</td>
        </tr>
      </tbody>
      </table>
    </div>
    } else {
      div = <div>
        <h1>Weather</h1>
        <p>Loading...</p>
      </div>
    }

    return div;
  }
}


export default Weather;
