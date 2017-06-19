//todos is an object with many keys
export const allTodos = ({ todos }) => Object.keys(todos).map(id => todos[id]);
