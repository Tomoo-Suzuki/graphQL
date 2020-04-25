const graphql = require('graphql')

const {
  user,
  account,
  story,
  post
} = require("./models");

const {
  GraphQLObjectType,
} = graphql

const UserType = new GraphQLObjectType({
  name: 'User',
  // fields: () => (user)
  fields: user
})

const AccountType = new GraphQLObjectType({
  name: 'Account',
  // fields: () => (account)
  fields: account
})

const StoryType = new GraphQLObjectType({
  name: 'Story',
  // fields: () => (story)
  fields: story
})

const PostType = new GraphQLObjectType({
  name: 'Post',
  // fields: () => (post)
  fields: post
})

exports.UserType = UserType;
exports.AccountType = AccountType;
exports.StoryType = StoryType;
exports.PostType = PostType;