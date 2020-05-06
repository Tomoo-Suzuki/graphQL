const graphql = require('graphql')

const {
  selectUser
} = require("./selectUser.js");
const {
  selectAccount
} = require("./selectAccount.js");
const {
  selectAccountU
} = require("./selectAccountU.js");
const {
  selectStory
} = require("./selectStory.js");
const {
  selectPost
} = require("./selectPost.js");
const {
  selectGenre
} = require("./selectGenre.js");

const {
  GraphQLObjectType,
  GraphQLID,
} = graphql

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    selectUser: selectUser,
    selectAccount: selectAccount,
    selectAccountU: selectAccountU,
    selectStory: selectStory,
    selectPost: selectPost,
    selectGenre: selectGenre
  }
})
exports.RootQuery = RootQuery;