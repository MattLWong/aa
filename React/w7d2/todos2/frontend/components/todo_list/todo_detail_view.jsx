import React from 'react';
import StepListContainer from '../step_list/step_list_container';

class TodoDetailView extends React.Component {

  render() {
    const { todo, removeTodo } = this.props;
    return(
      <div>
        <p className="todo-body">Details: { todo.body }</p>
        <p>Completion Status: { todo.done ? "Completed" : "In Progress" }</p>
        <p>Created: { Date(todo.id.toString()) }</p>
        <StepListContainer todo_id={ todo.id } />
        <button
          className="delete-button"
          onClick={ this.props.removeTodo }>Delete Todo</button>
      </div>
    );
  }
}

export default TodoDetailView;
