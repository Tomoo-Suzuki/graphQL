const graphql = require('graphql')
const {
  postgres
} = require("../../postgres");

const {
  StoryType
} = require("../type/");

const {
  GraphQLID
} = graphql

const selectStoryAll = {

  type: StoryType,
  args: {
    id: {
      type: GraphQLID
    }
  },
  resolve(parentValue, args) {
    const query = `SELECT * FROM stories`;
    return postgres
      .one(query)
      .then(res => res)
      .catch(err => err);
  }
}

exports.selectStoryAll = selectStoryAll;