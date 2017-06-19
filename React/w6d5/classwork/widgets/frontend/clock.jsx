import React from 'react';

class Clock extends React.Component {
  constructor(props){
    super(props);
    this.state = {time: new Date()};
    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    this.intervalId = setInterval(this.tick, 1000)
  }

  componentWillUnmount() {
    this.intervalId.clearInterval();
  }

  tick() {
    this.setState({time: new Date()});
  }


  render() {
    let hours = this.state.time.getHours();
    let minutes = this.state.time.getMinutes();
    let seconds = this.state.time.getSeconds();

    minutes = (minutes < 10) ? `0${minutes}` : minutes;
    seconds = (seconds < 10) ? `0${seconds}` : seconds;


    return (
      <div>
        <h1>Clock</h1>
        <div className="clock">
          <p className="flex-container space-between">
            <span className="flex-item">Time:</span>
            <span className='flex-item'>{hours}:{minutes}:{seconds} PDT</span>
          </p>
          <p className="flex-container space-between">
            <span className='flex-item'>Date:</span>
            <span className='flex-item'>{this.state.time.toDateString()}</span>
          </p>
        </div>
      </div>
    )
  }
}

export default Clock;
