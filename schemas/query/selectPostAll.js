const graphql = require('graphql')
const {
  postgres
} = require("../../postgres");

const {
  PostType
} = require("../type/");

const {
  GraphQLID,
} = graphql

const selectPostAll = {
  type: PostType,
  args: {
    id: {
      type: GraphQLID
    }
  },
  resolve(parentValue, args) {
    const query = `SELECT * FROM posts`;
    return postgres
      .one(query)
      .then(res => res)
      .catch(err => err);
  }
}
exports.selectPostAll = selectPostAll;