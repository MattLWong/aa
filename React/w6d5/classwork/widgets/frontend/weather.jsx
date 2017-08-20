import React from 'react';

const toQueryString2 = (obj) => {
  let parts = [];
  for (let i in obj) {
      if (obj.hasOwnProperty(i)) {
        console.log(typeof i);
          parts.push(`${encodeURIComponent(i)}=${encodeURIComponent(obj[i])}`);
      }
  }
  return parts.join('&');
}

class Weather extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      city: null,
      temp: null
    }
  }

  componentDidMount() {
    const that = this
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
    xhr.onreadystatechange = function(data) {
      if(xhr.readyState === XMLHttpRequest.DONE && xhr.status == 200) {
        let responseObj = JSON.parse(xhr.responseText);
        that.setState({
          weather: responseObj
        })

      }
    }
    xhr.open("GET", url, true)
    xhr.send();
  }

  render() {
    let div = <h1>Hello</h1>;

    if (this.state.city) {
      div = <div>
        <h1>Weather</h1>

      <table>
      <tbody>
        <tr>
          <th>Day</th>
          <th>0</th>
          <th>1</th>
          <th>2</th>
          <th>3</th>
          <th>4</th>
          <th>5</th>
          <th>6</th>
        </tr>
        <tr>
          <td>High</td>
          <td>{this.state.temp[0].temp.max}</td>
          <td>{this.state.temp[1].temp.max}</td>
          <td>{this.state.temp[2].temp.max}</td>
          <td>{this.state.temp[3].temp.max}</td>
          <td>{this.state.temp[4].temp.max}</td>
          <td>{this.state.temp[5].temp.max}</td>
          <td>{this.state.temp[6].temp.max}</td>
        </tr>
        <tr>
          <td>Low</td>
          <td>{this.state.temp[0].temp.min}</td>
          <td>{this.state.temp[1].temp.min}</td>
          <td>{this.state.temp[2].temp.min}</td>
          <td>{this.state.temp[3].temp.min}</td>
          <td>{this.state.temp[4].temp.min}</td>
          <td>{this.state.temp[5].temp.min}</td>
          <td>{this.state.temp[6].temp.min}</td>
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
