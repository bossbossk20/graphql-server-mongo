const TodoTC = require('../type-composers/todo.js')

const todoQuery = {
  todos: TodoTC.get('$findMany')
}

module.exports = todoQuery
