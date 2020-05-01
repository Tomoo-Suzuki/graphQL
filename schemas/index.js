const graphql = require('graphql')

const {
  GraphQLSchema
} = graphql

const {
  RootQuery
} = require("./query/rootQuery.js");
const {
  RootMutation
} = require("./mutation/RootMutation.js");

const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation
})
exports.schema = schema;