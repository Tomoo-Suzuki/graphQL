const graphql = require('graphql')

const {
  GraphQLID,
  GraphQLString,
  GraphQLBoolean,
  GraphQLInt
} = graphql

const genre = {
  id_book: {
    type: GraphQLID
  },
  no_title: {
    type: GraphQLInt
  },
  name_book: {
    type: GraphQLString
  },
  point_sales: {
    type: GraphQLInt
  },
  genre: {
    type: GraphQLInt
  },
  name_genre: {
    type: GraphQLString
  },
  name_category: {
    type: GraphQLString
  },
  is_complete: {
    type: GraphQLBoolean
  },
  is_latest: {
    type: GraphQLBoolean
  },
  is_reserve: {
    type: GraphQLBoolean
  },
  id_series: {
    type: GraphQLString
  },
  name_series: {
    type: GraphQLString
  },
  price_unit: {
    type: GraphQLString
  },
  price_now: {
    type: GraphQLInt
  },
  book_detail: {
    type: GraphQLString
  },
  point_id: {
    type: GraphQLString
  },
  point: {
    type: GraphQLInt
  },
  id_author: {
    type: GraphQLString
  },
  id_publisher: {
    type: GraphQLString
  },
  id_shop: {
    type: GraphQLString
  },
  url_detail: {
    type: GraphQLString
  },
  url_img: {
    type: GraphQLString
  },
  url_img_t: {
    type: GraphQLString
  },
  url_reader: {
    type: GraphQLString
  },
  date_register: {
    type: GraphQLString
  },
  date_sales: {
    type: GraphQLString
  },
  label_free: {
    type: GraphQLInt
  },
  label_free_s: {
    type: GraphQLInt
  },
  label_disc: {
    type: GraphQLInt
  },
  label_disc_s: {
    type: GraphQLInt
  },
  label_new: {
    type: GraphQLInt
  },
  label_off: {
    type: GraphQLInt
  },
  label_complete_s: {
    type: GraphQLInt
  }
}

exports.genre = genre;