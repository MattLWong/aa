import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {date: new Date()};
    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    setInterval(this.tick, 1000)
  }

  tick() {
    this.setState({date: new Date()})
  }

  render() {
    let date = this.state.date;
    let minutes = date.getMinutes();
    let hours = date.getHours();
    let seconds = date.getSeconds();

    minutes = (minutes < 10) ? `0${minutes}` : minutes;
    hours = (hours < 10) ? `0${hours}` : hours;
    seconds = (seconds < 10) ?`0${seconds}` : seconds;

    return(
      <div>
        <h1>Clock</h1>
        <p>Time: <span>{hours}:{minutes}:{seconds}</span></p>
        <p>Day: <span>{date.toDateString()}</span></p>
      </div>

    )
  }
}

export default Clock;
