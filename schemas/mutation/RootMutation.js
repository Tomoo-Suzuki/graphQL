const graphql = require("graphql");

const {
  insertUser
} = require('./insertUser.js');
const {
  insertRegistry
} = require('./insertRegistry.js');
const {
  insertAccount
} = require('./insertAccount.js');
const {
  insertAccountU
} = require('./insertAccountU.js');
const {
  insertStory
} = require('./insertStory.js');
const {
  insertPost
} = require('./insertPost.js');
const {
  updateUser
} = require('./updateUser.js');
const {
  updateAccount
} = require('./updateAccount.js');
const {
  updateStory
} = require('./updateStory.js');
const {
  updatePost
} = require('./updatePost.js');
const {
  deleteUser
} = require('./deleteUser.js');
const {
  deleteAccount
} = require('./deleteAccount.js');
const {
  deleteStory
} = require('./deleteStory.js');
const {
  deletePost
} = require('./deletePost.js');

const {
  GraphQLObjectType
} = graphql;

const RootMutation = new GraphQLObjectType({
  name: "RootMutationType",
  fields: {
    insertUser: insertUser,
    insertRegistry: insertRegistry,
    insertAccount: insertAccount,
    insertAccountU: insertAccountU,
    insertStory: insertStory,
    insertPost: insertPost,
    updateUser: updateUser,
    updateAccount: updateAccount,
    updateStory: updateStory,
    updatePost: updatePost,
    deleteUser: deleteUser,
    deleteAccount: deleteAccount,
    deleteStory: deleteStory,
    deletePost: deletePost
  },
});

exports.RootMutation = RootMutation;