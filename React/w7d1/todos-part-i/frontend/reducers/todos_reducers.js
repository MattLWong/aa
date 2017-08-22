import merge from 'lodash/merge';

const todosReducer = (state = {}, action) => {
  switch(action.type) {
    case "RECEIVE_TODOS":
      return {

      };
    case "RECEIVE_TODO":
      return {

      }
    default:
     return state;
  }
};

export default todosReducer;
