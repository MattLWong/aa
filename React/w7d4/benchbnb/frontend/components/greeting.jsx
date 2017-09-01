import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({currentUser}) => {
  let message = null;
  if (currentUser) {
    message = <section>
      <h1>Welcome, {currentUser.username}</h1>
      <button onClick={this.props.logout} />
    </section>
  } else {
    message = <section>
      <Link to='/#/signup'>Sign Up</Link><br/>
      <Link to='/#/login'>Login</Link>
      </section>
    debugger;
  }
  return(
    <div>
      {message}
    </div>
  )
}

export default Greeting;
