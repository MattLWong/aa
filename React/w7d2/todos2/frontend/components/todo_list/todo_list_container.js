import { connect } from 'react-redux';
import { receiveTodo, receiveTodos, removeTodo, createTodo, fetchTodos, updateTodo, deleteTodo } from '../../actions/todo_actions';
import { allTodos } from '../../reducers/selectors';
import TodoList from './todo_list';

const mapStateToProps = state => ({
  todos: allTodos(state),
  errors: state.errors
})

const mapDispatchToProps = dispatch => ({
  requestTodos: () => dispatch(fetchTodos()),
  createTodo: (todo) => dispatch(createTodo(todo)),
  updateTodo: todo => dispatch(updateTodo(todo)),
  deleteTodo: (todo) => dispatch(deleteTodo(todo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
