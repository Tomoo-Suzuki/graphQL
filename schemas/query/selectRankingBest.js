const graphql = require("graphql");
const {
  postgres
} = require("../../postgres");

const {
  ItemType
} = require("../type");

const {
  GraphQLList,
} = graphql;

const selectRankingBest = {
  type: new GraphQLList(ItemType),
  resolve(parentValue, args) {
    const query = `SELECT * FROM master_book order by point_sales asc limit 20`;
    return postgres
      .any(query)
      .then(function (res) {
        return res
      })
      .catch((err) => err);
  },
};
exports.selectRankingBest = selectRankingBest;