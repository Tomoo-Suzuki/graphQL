const graphql = require('graphql')

const {
  GraphQLID,
  GraphQLString,
  GraphQLBoolean,
} = graphql

const post = {
  id_story: {
    type: GraphQLID
  },
  id_post: {
    type: GraphQLID
  },
  has_chapter: {
    type: GraphQLBoolean
  },
  title_chapter: {
    type: GraphQLString
  },
  title: {
    type: GraphQLString
  },
  story: {
    type: GraphQLString
  },
  title_bk: {
    type: GraphQLString
  },
  story_bk: {
    type: GraphQLString
  },
  date_last_modify: {
    type: GraphQLString
  }
}

exports.post = post;