const graphql = require("graphql");
const {
  postgres
} = require("../../postgres");
const {
  PostType
} = require("../type/");
const {
  GraphQLID,
  GraphQLNonNull
} = graphql;

const deletePost = {

  type: PostType,
  args: {
    id_post: {
      type: GraphQLNonNull(GraphQLID),
    },
  },
  resolve(parent, args) {
    const query = `DELETE FROM posts WHERE id_post=$1 RETURNING id_post`;
    const values = [args.id_post];
    return postgres
      .one(query, values)
      .then((res) => res)
      .catch((err) => err);
  }
};

exports.deletePost = deletePost;