import React from 'react';
import { Redirect } from 'react-router';

class BenchForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      description: "",
      seating: 2,
      lat: this.props.lat,
      lng: this.props.lng
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createBench({bench: this.state});
    this.props.history.push('/');
  }

  handle(property) {
    return e => {this.setState({[property]: e.target.value})}
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <label>
          Description
          <input
            type="text"
            value={this.state.description}
            onChange={this.handle("description")}
            />
        </label>
        <label>
          Number of seats
          <input
            type="number"
            min="1"
            step="1"
            value={this.state.seating}
            onChange={this.handle("seating")}
            />
        </label>
        <label>
          Latitude
          <input
            type="number"
            disabled
            value={this.state.lat}

            />
        </label>
        <label>
          Longitude
          <input
            type="number"
            disabled
            value={this.state.lng}
            />
        </label>
        <input type="submit" value="Submit"/>
      </form>
    )
  }
}

export default BenchForm;
