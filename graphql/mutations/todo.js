const TodoTC = require('./../type-composers/todo')
const todoMutation = {
  createTodo: TodoTC.get('$createOne')
}
module.exports = todoMutation
