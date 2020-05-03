const graphql = require('graphql')
const {
  postgres
} = require("../../postgres");

const {
  AccountType
} = require("../type/");

const selectAccountAll = {
  type: AccountType,
  resolve(parentValue, args) {
    const query = `SELECT * FROM accounts`;
    return postgres
      .one(query)
      .then(res => res)
      .catch(err => err);
  }
}
exports.selectAccountAll = selectAccountAll;