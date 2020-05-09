const graphql = require("graphql");
const {
  postgres
} = require("../../postgres");

const {
  ItemType
} = require("../type");

const {
  GraphQLInt,
  GraphQLList,
} = graphql;

const selectRankingEach1 = {
  type: new GraphQLList(ItemType),
  resolve(parentValue, args) {
    const query = `SELECT * FROM (
      SELECT *, ROW_NUMBER() OVER(PARTITION BY genre ORDER BY point_sales) res
      FROM master_book
      ) as aliasname
      where res = 1`;
    return postgres
      .any(query)
      .then(function (res) {
        return res
      })
      .catch((err) => err);
  },
};
exports.selectRankingEach1 = selectRankingEach1;