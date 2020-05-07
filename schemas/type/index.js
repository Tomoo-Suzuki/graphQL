const graphql = require('graphql')

const {
  user
} = require("../model/user.js");
const {
  registry
} = require("../model/registry.js");
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
  genre
} = require("../model/genre.js");


const {
  GraphQLObjectType,
} = graphql

const UserType = new GraphQLObjectType({
  name: 'User',
  // fields: () => (user)
  fields: user
})
const RegistryType = new GraphQLObjectType({
  name: 'Registry',
  // fields: () => (registry)
  fields: registry
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

const GenreType = new GraphQLObjectType({
  name: 'Genre',
  //fields: () => (genre)
  fields: genre
})

exports.UserType = UserType;
exports.RegistryType = RegistryType;
exports.AccountType = AccountType;
exports.StoryType = StoryType;
exports.PostType = PostType;
exports.GenreType = GenreType;