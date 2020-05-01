const graphql = require('graphql')
const {
  postgres
} = require("../../postgres");

const {
  StoryType
} = require("../type/");

const {
  GraphQLID,
} = graphql

const selectStory = {
  type: StoryType,
  args: {
    id: {
      type: GraphQLID
    }
  },
  resolve(parentValue, args) {
    const query = `SELECT * FROM stories WHERE id=$1`;
    const values = args.id;
    return postgres
      .one(query, values)
      .then(res => res)
      .catch(err => err);
  }
}
exports.selectStory = selectStory;