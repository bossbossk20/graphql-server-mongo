const mongoose = require('mongoose')
const todoSchema = require('../schemas/todo.schema')
const Todo = mongoose.model('Todo', todoSchema)

module.exports = Todo