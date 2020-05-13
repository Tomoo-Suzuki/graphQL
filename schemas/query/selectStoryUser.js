const graphql = require('graphql')
const {
  postgres
} = require("../../postgres");

const {
  StoryType
} = require("../type/");

const {
  GraphQLID,
  GraphQLList
} = graphql

const selectStoryUser = {
  type: new GraphQLList(StoryType),
  args: {
    id_user: {
      type: GraphQLID
    }
  },
  resolve(parentValue, args) {
    const query = `SELECT * FROM stories WHERE id_user=$1`;
    const values = args.id_user;
    return postgres
      .many(query, values)
      .then(res => res)
      .catch(err => err);
  }
}
exports.selectStoryUser = selectStoryUser;