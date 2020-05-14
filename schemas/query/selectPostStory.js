const graphql = require('graphql')
const {
  postgres
} = require("../../postgres");

const {
  PostType
} = require("../type/");

const {
  GraphQLID,
  GraphQLList,
} = graphql

const selectPostStory = {
  type: new GraphQLList(PostType),
  args: {
    id_story: {
      type: GraphQLID
    }
  },
  resolve(parentValue, args) {
    const query = `SELECT * FROM posts WHERE id_story=$1`;
    const values = args.id_story;
    return postgres
      .many(query, values)
      .then(res => res)
      .catch(err => err);
  }
}
exports.selectPostStory = selectPostStory;