import React from 'react';
import StepListContainer from '../step_list/step_list_container';

class TodoDetailView extends React.Component {

  render() {
    const { todo, removeTodo, deleteTodo } = this.props;
    return(
      <div>
        <p className="todo-body">Details: { todo.body }</p>
        <p>Status: { todo.done ? "Completed" : "In Progress" }</p>
        <p>Created: { Date(todo.id.toString()) }</p>
        <StepListContainer todo_id={ todo.id } />
        <button
          className="delete-button"
          onClick={ deleteTodo }>Delete Todo</button>
      </div>
    );
  }
}

export default TodoDetailView;
