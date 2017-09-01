import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.processForm({user: this.state});
    this.setState({
      username: "",
      password: ""
    })
  }

  update(attribute) {
      return (e) => this.setState({[attribute]: e.target.value})
  }

  render() {
    let title;
    let errors = null;
    if (this.props.match.path == "/signup") {
      title = "Sign Up!"
    } else {
      title = "Log In!"
    }
    if (this.props.errors) {
      errors = this.props.errors.map( (error, idx) => <li key={idx}>{error}</li>)
    }
    return (
      <div>
        <h1>{title}</h1>
        <ul>
          {errors}
        </ul>
        <form onSubmit={this.handleSubmit}>
          Username: <input
            type="text"
            value={this.state.username}
            placeholder="Username"
            onChange={this.update("username")}
            />
          <br/>
          Password: <input
            type="text"
            value={this.state.password}
            placeholder="Password"
            onChange={this.update("password")}
            />
          <button>{title}</button>
        </form>
      </div>
    )
  }
}

export default SessionForm;
