const TodoTC = require('./../type-composers/todo')
const todoMutation = {
  createTodo: TodoTC.get('$createOne'),
  deleteTodo: TodoTC.get('$removeById')
}
module.exports = todoMutation
