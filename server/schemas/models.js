const graphql = require('graphql')

const {
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
  GraphQLDate,
  GraphQLTimestamp
} = graphql

const user = {
  id: {
    type: GraphQLID
  },
  password: {
    type: GraphQLString
  },
  user_type: {
    type: GraphQLInt
  },
  magazine: {
    type: GraphQLBoolean
  },
  agree_to_terms: {
    type: GraphQLBoolean
  },
  date_reception: {
    type: GraphQLString
  }
}

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

exports.user = user;
exports.account = account;
exports.story = story;
exports.post = post;