import { uniqueId } from '../../utils/utils';
import ErrorList from './error_list';

import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      done: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property) {
    return (e) => this.setState({[property]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const todo = Object.assign({}, this.state, { id: uniqueId() });
    // this.props.receiveTodo(todo);
    this.props.createTodo({ todo }).then(
      () => this.setState({ title: '', body: ''})
    );
    // this.setState({
    //   title: "",
    //   body: ""
    // });
  }

  render() {
    return (
      <div>
        <ErrorList errors={this.props.errors}/>
        <form className="todo-form" onSubmit={this.handleSubmit}>
          <label>Title:
            <input
              className="input"
              ref="title"
              value={this.state.title}
              placeholder="buy milk"
              onChange={this.update('title')}
              required/>
          </label>
          <label>Body:
            <textarea
              className="input"
              ref="body"
              cols='25'
              value={this.state.body}
              rows='5'
              placeholder="more specific instructions"
              onChange={this.update('body')}
              required></textarea>
          </label>
          <button className="create-button">Create Todo!</button>
        </form>
      </div>
    );
  }
};

export default TodoForm;
