import React from 'react';
import TodoListContainer from './todo_list/todo_list_container';

const App = () => {
  return (
    <div className="App">
      <h1>My ToDo List</h1>
      <h3><em>Made with React/Redux</em></h3>
      <TodoListContainer/>
    </div>
  )
};

export default App;
