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
  selectStoryUser
} = require("./selectStoryUser.js");
const {
  selectPost
} = require("./selectPost.js");
const {
  selectPostStory
} = require("./selectPostStory.js");
const {
  selectGenre
} = require("./selectGenre.js");
const {
  selectList
} = require("./selectList.js");
const {
  selectRankingGenre
} = require("./selectRankingGenre.js");
const {
  selectRankingBest
} = require("./selectRankingBest.js");
const {
  selectRankingEach1
} = require("./selectRankingEach1.js");
const {
  selectRanking
} = require("./selectRanking.js");
const {
  selectDetail
} = require("./selectDetail.js");

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
    selectStoryUser: selectStoryUser,
    selectPost: selectPost,
    selectPostStory: selectPostStory,
    selectGenre: selectGenre,
    selectList: selectList,
    selectRankingGenre: selectRankingGenre,
    selectRankingBest: selectRankingBest,
    selectRankingEach1: selectRankingEach1,
    selectRanking: selectRanking,
    selectDetail: selectDetail
  }
})
exports.RootQuery = RootQuery;