const graphql = require("graphql");
const {
  postgres
} = require("../../postgres");
const {
  PostType
} = require("../type/");
const {
  post
} = require("../model/post.js");

const updatePost = {
  type: PostType,
  args: post,
  resolve(parent, args) {
    const query = `UPDATE SET(creator_id, created, title, description) VALUES ($1, $2, $3, $4) WHERE id=$1`;
    const values = [args.id];
    return postgres
      .one(query, values)
      .then((res) => res)
      .catch((err) => err);
  }
}

exports.updatePost = updatePost;