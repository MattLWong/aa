import React from 'react';
import TodoForm from './todo_form';
import TodoListItem from './todo_list_item';

class TodoList extends React.Component {

  componentDidMount() {
    this.props.requestTodos();
  }

  render() {
    const { todos, removeTodo, createTodo, errors, updateTodo, deleteTodo } = this.props;
    const todoItems = todos.map((todo, idx) => (<TodoListItem key={todo.id} todo={todo} deleteTodo={deleteTodo} updateTodo = { updateTodo }/>));

    return (
      <div className="todo-list">
        <ul className="todo-items">
          {todoItems}
        </ul>
        <TodoForm errors={errors} createTodo={createTodo}/>
      </div>

    );
  }
}

export default TodoList;
