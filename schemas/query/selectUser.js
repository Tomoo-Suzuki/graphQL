const graphql = require('graphql')
const {
  postgres
} = require("../../postgres");

const {
  UserType
} = require("../type/");

const {
  GraphQLID
} = graphql

const selectUser = {
  type: UserType,
  args: {
    id: {
      type: GraphQLID
    }
  },
  resolve(parentValue, args) {
    const query = `SELECT * FROM users WHERE id=$1`;
    const values = args.id;
    return postgres
      .one(query, values)
      .then(res => res)
      .catch(err => err);
  }
};
exports.selectUser = selectUser;