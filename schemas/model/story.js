const graphql = require('graphql')

const {
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
} = graphql

const story = {
  id: {
    type: GraphQLID
  },
  id_story: {
    type: GraphQLID
  },
  title_main: {
    type: GraphQLString
  },
  auther_name: {
    type: GraphQLString
  },
  is_complete: {
    type: GraphQLBoolean
  },
  genre: {
    type: GraphQLInt
  },
  catch_copy: {
    type: GraphQLString
  },
  synopsis: {
    type: GraphQLString
  },
  keywords: {
    type: GraphQLString
  },
  extreme_depiction: {
    type: GraphQLString
  },
  color_type: {
    type: GraphQLInt
  },
  accept_advertisement: {
    type: GraphQLBoolean
  },
  accept_rating: {
    type: GraphQLBoolean
  },
  accept_reviews: {
    type: GraphQLBoolean
  },
  accept_impression: {
    type: GraphQLBoolean
  },
  publish_evaluation: {
    type: GraphQLBoolean
  },
  accept_typo_reports: {
    type: GraphQLBoolean
  }
}

exports.story = story;