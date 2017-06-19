import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

class TodoList extends React.Component {

  render() {

    const { todos, receiveTodo } = this.props

    console.log(todos);
    const todoListItems = todos.map( (todo) => (
      <TodoListItem
        key={`todo-list-item${todo.id}`}
        todo={todo}
        receiveTodo={receiveTodo} />
    ))
    return (
      <div>
        <ul>
          {todoListItems}
          <TodoForm 
            receiveTodo={receiveTodo}/>
        </ul>
      </div>
    )
  }
}

export default TodoList;
