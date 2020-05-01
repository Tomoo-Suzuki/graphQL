const graphql = require("graphql");
const {
  postgres
} = require("../../postgres");
const {
  StoryType
} = require("../type/");
const {
  story
} = require("../model/story");

const updateStory = {
  type: StoryType,
  args: story,
  resolve(parent, args) {
    const query = `UPDATE SET(creator_id, created, title, description) VALUES ($1, $2, $3, $4) WHERE id=$1`;
    const values = [args.id];
    return postgres
      .one(query, values)
      .then((res) => res)
      .catch((err) => err);
  }
}

exports.updateStory = updateStory;