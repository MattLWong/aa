import { connect } from 'react-redux';
import { receiveTodo, receiveTodos, removeTodo } from '../../actions/todo_actions';
import { allTodos } from '../../reducers/selectors';
import TodoList from './todo_list';

const mapStateToProps = state => ({
  todos: allTodos(state),
  state
})

const mapDispatchToProps = dispatch => ({
  receiveTodos: () => dispatch(receiveTodos()),
  receiveTodo: (todo) => dispatch(receiveTodo(todo)),
  removeTodo: (todo) => dispatch(removeTodo(todo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
