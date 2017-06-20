const { Schema } = require('mongoose')
const todoSchema = new Schema({
    task1: String,
    task2: String
})

module.exports = todoSchema