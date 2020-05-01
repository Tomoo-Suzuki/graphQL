const graphql = require('graphql')
const {
  postgres
} = require("../../postgres");

const {
  UserType
} = require("../type/");

const selectUserAll = {
  type: UserType,
  resolve() {
    const query = `SELECT * FROM users`;
    return postgres
      .one(query)
      .then(res => res)
      .catch(err => err);
  }
}
exports.selectUserAll = selectUserAll;