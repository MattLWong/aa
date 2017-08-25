import React from 'react';
import merge from 'lodash/merge'
import TodoDetailView from './todo_detail_view';

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      detail: false
    }
    this.toggleTodo = this.toggleTodo.bind(this);
    this.toggleDetail = this.toggleDetail.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  toggleTodo(e) {
    e.preventDefault();
    const toggledTodo = merge(
      {},
      this.props.todo,
      { done: !this.props.todo.done }
    );

     this.props.receiveTodo(toggledTodo);
  }

  deleteTodo(e) {
    e.preventDefault();
    this.props.removeTodo(this.props.todo)
  }

  toggleDetail(e) {
    e.preventDefault();
    //a setState triggers a re-render
    this.setState({
      detail: (!this.state.detail)
    });
  }

  render() {
    const { title, body, id, done } = this.props.todo;
    let detail = null;
    if (this.state.detail) {
      detail = <TodoDetailView todo={this.props.todo} />
    }
    return (
      <li className="todoItem">
        <div className={done ?  "completed" : "uncompleted"}>
          <h2 onClick={this.toggleDetail}>{title}</h2>
          {detail}
          <button onClick={this.toggleTodo}>{done ? "Undo" : "Done" }</button>
          <button onClick={this.deleteTodo}>Delete</button>
        </div>
      </li>
    )
  }
}
export default TodoListItem;
