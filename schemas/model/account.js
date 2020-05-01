const graphql = require('graphql')

const {
  GraphQLID,
  GraphQLString,
} = graphql

const account = {
  id: {
    type: GraphQLID
  },
  last_name: {
    type: GraphQLString
  },
  first_name: {
    type: GraphQLString
  },
  last_name_kana: {
    type: GraphQLString
  },
  first_name_kana: {
    type: GraphQLString
  },
  tel: {
    type: GraphQLString
  },
  email: {
    type: GraphQLString
  },
  email_confirm: {
    type: GraphQLString
  },
  birthday: {
    type: GraphQLString
  },
  zip: {
    type: GraphQLString
  },
  prefecture: {
    type: GraphQLString
  },
  city: {
    type: GraphQLString
  },
  address3: {
    type: GraphQLString
  },
  building: {
    type: GraphQLString
  },
  purpose: {
    type: GraphQLString
  }
}

exports.account = account;