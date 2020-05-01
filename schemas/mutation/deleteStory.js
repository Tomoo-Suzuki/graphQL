const graphql = require("graphql");
const {
  postgres
} = require("../../postgres");
const {
  StoryType
} = require("../type/");
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLNonNull
} = graphql;

const deleteStory = {

  type: StoryType,
  args: {
    id: {
      type: GraphQLNonNull(GraphQLID),
    },
  },
  resolve(parent, args) {
    const query = `DELETE FROM stories WHERE id=$1 RETURNING id`;
    const values = [args.id];
    return postgres
      .one(query, values)
      .then((res) => res)
      .catch((err) => err);
  }
}

exports.deleteStory = deleteStory;