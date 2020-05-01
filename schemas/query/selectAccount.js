const graphql = require('graphql')
const {
  postgres
} = require("../../postgres");

const {
  AccountType,
} = require("../type/");

const {
  GraphQLID,
} = graphql

const selectAccount = {
  type: AccountType,
  args: {
    id: {
      type: GraphQLID
    }
  },
  resolve(parentValue, args) {
    const query = `SELECT * FROM accounts WHERE id=$1`;
    const values = args.id;
    return postgres
      .one(query, values)
      .then(res => res)
      .catch(err => err);
  }
}
exports.selectAccount = selectAccount;