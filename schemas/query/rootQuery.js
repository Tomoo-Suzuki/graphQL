const graphql = require('graphql')

const {
  selectUser
} = require("./selectUser.js");
const {
  selectUserAll
} = require("./selectUserAll.js");
const {
  selectAccount
} = require("./selectAccount.js");
const {
  selectAccountU
} = require("./selectAccountU.js");
const {
  selectAccountAll
} = require("./selectAccountAll.js");
const {
  selectStory
} = require("./selectStory.js");
const {
  selectStoryAll
} = require("./selectStoryAll.js");
const {
  selectPost
} = require("./selectPost.js");
const {
  selectPostAll
} = require("./selectPostAll.js");

const {
  GraphQLObjectType,
  GraphQLID,
} = graphql

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    selectUser: selectUser,
    selectUserAll: selectUserAll,
    selectAccount: selectAccount,
    selectAccountU: selectAccountU,
    selectAccountAll: selectAccountAll,
    selectStory: selectStory,
    selectStoryAll: selectStoryAll,
    selectPost: selectPost,
    selectPostAll: selectPostAll
  }
})
exports.RootQuery = RootQuery;