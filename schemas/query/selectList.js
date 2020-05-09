const graphql = require("graphql");
const {
  postgres
} = require("../../postgres");

const {
  ItemType
} = require("../type/");

const {
  GraphQLInt,
  GraphQLList,
} = graphql;

const selectList = {
  type: new GraphQLList(ItemType),
  resolve(parentValue, args) {
    const query = `SELECT * FROM master_book order by genre asc`;
    return postgres
      .any(query)
      .then(function (res) {
        return res
      })
      .catch((err) => err);
  },
};
exports.selectList = selectList;