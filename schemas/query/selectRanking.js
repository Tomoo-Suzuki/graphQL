const graphql = require("graphql");
const {
  postgres
} = require("../../postgres");

// const {
//   RankingType
// } = require("../type/");

const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLList,
} = graphql;

const {
  selectRankingGenre
} = require("../query/selectRankingGenre.js");
const {
  selectRankingBest
} = require("../query/selectRankingBest.js");
const {
  selectRankingEach1
} = require("../query/selectRankingEach1.js");



// ============================================
// ============================================
// ============================================
const RankingType = new GraphQLObjectType({
  name: 'Ranking',
  //fields: () => (genre)
  fields: {
    selectRankingBest: selectRankingBest,
    selectRankingEach1: selectRankingEach1,
    selectRankingGenre: selectRankingGenre,
  }
})

const selectRanking = {
  type: RankingType,
  args: {
    genre: {
      type: GraphQLInt,
    },
  },
  resolve(parentValue, args) {
    const query1 = `SELECT * FROM master_book order by point_sales asc limit 20;`;
    const query2 = `SELECT * FROM (
      SELECT *, ROW_NUMBER() OVER(PARTITION BY genre ORDER BY point_sales) res
      FROM master_book
      ) as aliasname
      where res = 1`;
    const query3 = `SELECT * FROM master_book WHERE genre=1 limit 10;`;
    const query4 = `SELECT * FROM master_book WHERE genre=2 limit 10;`;
    const query5 = `SELECT * FROM master_book WHERE genre=3 limit 10;`;
    const query6 = `SELECT * FROM master_book WHERE genre=4 limit 10;`;
    const query7 = `SELECT * FROM master_book WHERE genre=5 limit 10;`;
    const query8 = `SELECT * FROM master_book WHERE genre=6 limit 10;`;
    const query9 = `SELECT * FROM master_book WHERE genre=7 limit 10;`;
    const query10 = `SELECT * FROM master_book WHERE genre=8 limit 10;`;
    const query11 = `SELECT * FROM master_book WHERE genre=9 limit 10;`;
    const query12 = `SELECT * FROM master_book WHERE genre=10 limit 10;`;
    const query13 = `SELECT * FROM master_book WHERE genre=11 limit 10;`;
    return postgres
      .task('getall', async t => {
        const res1 = await t.any(query1);
        const res2 = await t.any(query2);
        const res3 = await t.any(query3);
        const res4 = await t.any(query4);
        const res5 = await t.any(query5);
        const res6 = await t.any(query6);
        const res7 = await t.any(query7);
        const res8 = await t.any(query8);
        const res9 = await t.any(query9);
        const res10 = await t.any(query10);
        const res11 = await t.any(query11);
        const res12 = await t.any(query12);
        const res13 = await t.any(query13)
        return {
          res1,
          res2,
          res3,
          res4,
          res5,
          res6,
          res7,
          res8,
          res9,
          res10,
          res11,
          res12,
          res13
        }
      })
      .then(function ({
        res1,
        res2,
        res3,
        res4,
        res5,
        res6,
        res7,
        res8,
        res9,
        res10,
        res11,
        res12,
        res13
      }) {
        const tempHash = {};
        return {
          res1,
          res2,
          res3,
          res4,
          res5,
          res6,
          res7,
          res8,
          res9,
          res10,
          res11,
          res12,
          res13
        };
      })
      .catch((err) => err);
  },
};
exports.selectRanking = selectRanking;