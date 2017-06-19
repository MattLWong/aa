import React from 'react';
import uniqueId from '../../util';

class TodoForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      word: ""
    };
  }


  render() {
    console.log(this.props);

    return(
      <div>
        <h2>This is the TodoForm</h2>

      </div>
    )
  }
}

export default TodoForm;
