import React from 'react';
import TodoForm from './todo_form';
import TodoListItem from './todo_list_item';

class TodoList extends React.Component {


  render() {
    const {todos, removeTodo, receiveTodo} = this.props;
    const todoItems = todos.map((todo, idx) => (<TodoListItem key={todo.id} todo={todo} removeTodo={removeTodo} receiveTodo={receiveTodo}/>));

    return (
      <div className="todo-list">
        <ul className="todo-items">
          {todoItems}
        </ul>
        <TodoForm receiveTodo={receiveTodo}/>
      </div>

    );
  }
}

export default TodoList;
