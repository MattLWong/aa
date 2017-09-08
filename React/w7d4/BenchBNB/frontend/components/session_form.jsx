import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Redirect } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.setState({
      username: "",
      password: ""
    })
    this.props.processForm({user: user});
  }

  update(field) {
    return e => this.setState({[field]: e.target.value});
  }

  renderErrors() {
    let errors_list = this.props.errors ? this.props.errors.map( (error, idx) => (<li key={idx}>{error}</li>)) : null;
    return (
      <ul>
        {errors_list}
      </ul>
    )
  }

  navLink() {
    return (this.props.formType == "signup") ? <Link to='/login'>log in instead</Link> : <Link to='/signup'>sign up instead</Link>
  }

  render() {
    let { loggedIn, formType } = this.props;
    let title = formType == "signup" ? "sign up" : "log in"
    return (
      <div className="session-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          Please {title} or {this.navLink()}
          {this.renderErrors()}
          <div className="login-form">
            <br/>
            <label>Username
            <input
              type="text"
              id="username"
              value={this.state.username}
              onChange={this.update("username")}/>
            </label>
            <br/>
            <label htmlFor="password">Password
            <input
              type="password"
              id="password"
              value={this.state.password}
              onChange={this.update("password")}/>
            </label>
            <br/>
            <input type="submit" value="Submit"/>
          </div>
        </form>
      </div>
    )
  }
}


export default withRouter(SessionForm);
