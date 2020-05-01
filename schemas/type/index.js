const graphql = require('graphql')

const {
  user
} = require("../model/user.js");
const {
  account
} = require("../model/account.js");
const {
  story
} = require("../model/story.js");
const {
  post
} = require("../model/post.js");


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