const graphql = require('graphql')

const {
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
} = graphql

const registry = {
  id: {
    type: GraphQLID
  },
  password: {
    type: GraphQLString
  },
  email: {
    type: GraphQLString
  },
  email_confirm: {
    type: GraphQLString
  },
  date_reception: {
    type: GraphQLString
  }
}

exports.registry = registry;