const { composeWithMongoose } = require('graphql-compose-mongoose')
const TodoModel = require('./../../models/todo.model')

const TodoTC = composeWithMongoose(TodoModel, {})
module.exports = TodoTC
