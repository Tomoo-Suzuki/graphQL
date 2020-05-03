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

const selectPost = {
  type: PostType,
  args: {
    id_post: {
      type: GraphQLID
    }
  },
  resolve(parentValue, args) {
    const query = `SELECT * FROM posts WHERE id_post=$1`;
    const values = args.id_post;
    return postgres
      .one(query, values)
      .then(res => res)
      .catch(err => err);
  }
}
exports.selectPost = selectPost;