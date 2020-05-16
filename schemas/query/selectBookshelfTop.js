const graphql = require("graphql");
const {
  postgres
} = require("../../postgres");

const {
  ItemType
} = require("../type");


const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLID,
  GraphQLList,
} = graphql;


const selectBookshelfTop = {
  type: new GraphQLList(ItemType),
  // type: ItemType,
  args: {
    id_user: {
      type: GraphQLID,
    },
  },
  resolve(parentValue, args) {
    return postgres
      .tx(t => {
        return t.map(`SELECT id_book FROM purchase_history where id_user = $1;`, [args.id_user], row => {
          //console.log(row.id_book)
          return t.any(`SELECT * FROM master_book WHERE id_book = $1;`, row.id_book)
            .then(res => {
              return res[0];
            })
        })
      })
      .then(function (res) {
        return res
      })
      .catch((err) => err);
  }
};
exports.selectBookshelfTop = selectBookshelfTop;