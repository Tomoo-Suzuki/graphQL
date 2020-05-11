const graphql = require("graphql");
const {
  postgres
} = require("../../postgres");

const {
  ItemType
} = require("../type/");

const {
  GraphQLID,
  GraphQLInt,
  GraphQLList,
} = graphql;

const selectDetail = {
  type: ItemType,
  args: {
    id_book: {
      type: GraphQLID,
    },
  },
  resolve(parentValue, args) {
    const query = `SELECT * FROM master_book WHERE id_book=$1`;
    const values = args.id_book;
    return postgres
      .one(query, values)
      .then(function (res) {
        console.log(res)
        return res
      })
      .catch((err) => err);
  },
};
exports.selectDetail = selectDetail;