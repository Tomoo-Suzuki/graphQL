const graphql = require("graphql");
const {
  postgres
} = require("../../postgres");
const {
  AccountType
} = require("../type/");
const {
  GraphQLID,
  GraphQLNonNull
} = graphql;

const deleteAccount = {
  type: AccountType,
  args: {
    id: {
      type: GraphQLNonNull(GraphQLID),
    },
  },
  resolve(parent, args) {
    const query = `DELETE FROM accounts WHERE id=$1 RETURNING id`;
    const values = [args.id];
    return postgres
      .one(query, values)
      .then((res) => res)
      .catch((err) => err);
  }
}
exports.deleteAccount = deleteAccount;