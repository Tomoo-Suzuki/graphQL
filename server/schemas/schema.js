const graphql = require('graphql')

const {
  GraphQLSchema
} = graphql

const RootQuery = require("./queries");
const RootMutation = require("./mutations");

const schema = new GraphQLSchema({
  RootQuery,
  RootMutation
})
exports.schema = schema;