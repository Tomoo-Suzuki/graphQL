const graphql = require('graphql')

const {
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
} = graphql

const user = {
  id: {
    type: GraphQLID
  },
  password: {
    type: GraphQLString
  },
  user_type: {
    type: GraphQLInt
  },
  magazine: {
    type: GraphQLBoolean
  },
  agree_to_terms: {
    type: GraphQLBoolean
  },
  date_reception: {
    type: GraphQLString
  }
}

exports.user = user;