//TODO:query毎に買い換える
const graphql = require('graphql')

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLBoolean,
  GraphQLDate,
  GraphQLSchema,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull
} = graphql

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
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
      type: GraphQLInt
    }
  })
})

const AccountType = new GraphQLObjectType({
  name: 'Account',
  fields: () => ({
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
      type: GraphQLDate
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
  })
})

const StoryType = new GraphQLObjectType({
  name: 'Storie',
  fields: () => ({
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
      type: GraphQLBoolean
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
  })
})

const PostType = new GraphQLObjectType({
  name: 'Post',
  fields: () => ({
    id_story: {
      type: GraphQLID
    },
    id_post: {
      type: GraphQLString
    },
    has_chapter: {
      type: GraphQLString
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
    date_uploaded: {
      type: GraphQLTimestamp
    },
    date_last_modify: {
      type: GraphQLTimestamp
    }
  })
})

exports.UserType = UserType;
exports.AccountType = AccountType;
exports.StotyType = StoryType;
exports.PostType = PostType;


// const DirectorType = new GraphQLObjectType({
//   name: 'Director',
//   fields: () => ({
//     id: {
//       type: GraphQLID
//     },
//     name: {
//       type: GraphQLString
//     },
//     age: {
//       type: GraphQLInt
//     },
//     movies: {
//       type: new GraphQLList(MovieType),
//       resolve(parent, args) {
//         return Movie.find({
//           directorId: parent.id
//         })
//       }
//     }
//   })
// })