const express = require('express')
const graphqlHTTP = require('express-graphql')
const mongoose = require('mongoose')

const app = express()
const schema = require('./graphql')

mongoose.connect('mongodb://localhost/graphql101')

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
}))

app.listen(8888, () => {
  console.log('running on 8888')
})
