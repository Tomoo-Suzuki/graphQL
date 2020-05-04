const graphql = require('graphql')
const {
  postgres
} = require("../../postgres");

const {
  AccountType,
} = require("../type/");

const {
  GraphQLString,
} = graphql

const selectAccountU = {
  type: AccountType,
  args: {
    email: {
      type: GraphQLString
    }
  },
  resolve(parentValue, args) {
    const query = `SELECT * FROM accounts WHERE email=$1`;
    const values = args.email;
    return postgres
      .one(query, values)
      .then(res => res)
      .catch(err => err);
  }
}
exports.selectAccountU = selectAccountU;