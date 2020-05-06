const graphql = require('graphql')
const {
  postgres
} = require("../../postgres");

const {
  GenreType
} = require("../type/");

const {
  GraphQLInt
} = graphql

const selectGenre = {
  type: GenreType,
  args: {
    genre: {
      type: GraphQLInt
    }
  },
  resolve(parentValue, args) {
    const query = `SELECT * FROM master_book WHERE genre=$1`;
    const values = args.genre;
    return postgres
      .many(query, values)
      .then(res => res)
      .catch(err => err);
  }
}
exports.selectGenre = selectGenre;