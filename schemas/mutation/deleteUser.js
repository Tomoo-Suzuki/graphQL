const graphql = require("graphql");
const {
  postgres
} = require("../../postgres");
const {
  UserType
} = require("../type/");
const {
  GraphQLID,
  GraphQLNonNull
} = graphql;

const deleteUser = {
  type: UserType,
  args: {
    id: {
      type: GraphQLNonNull(GraphQLID),
    },
  },
  resolve(parent, args) {
    const query = `DELETE FROM users WHERE id=$1 RETURNING id`;
    const values = [args.id];
    return postgres
      .one(query, values)
      .then((res) => res)
      .catch((err) => err);
  }
}

exports.deleteUser = deleteUser;