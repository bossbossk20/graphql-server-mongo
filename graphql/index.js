const { GQC } = require('graphql-compose')
const queryField = require('./queries')
const mutationField = require('./mutations')

GQC.rootQuery().addFields(queryField)
GQC.rootMutation().addFields(mutationField)

const GQLSchema = GQC.buildSchema()

module.exports = GQLSchema
