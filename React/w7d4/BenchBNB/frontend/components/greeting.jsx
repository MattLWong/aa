import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({currentUser}) => {
  let greeting;
  if (currentUser) {
    greeting = `Welcome, ${currentUser.username}!`
  } else {
    greeting = <div>
      <Link to='/signup'>Sign Up</Link><br/>
      <Link to='/login'>Log In</Link>
    </div>
  }

  return (<div>
      {greeting}
    </div>)
}

export default Greeting;
