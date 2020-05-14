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
    const query = `UPDATE posts SET
      (has_chapter,
      title_chapter,
      title,
      story,
      date_last_modify)
      =($1, $2, $3, $4, $5)
      WHERE id_post=$6 RETURNING id_story,
      id_post,
      has_chapter,
      title_chapter,
      title,
      story,
      date_last_modify`;
    const values = [
      args.has_chapter,
      args.title_chapter,
      args.title,
      args.story,
      args.date_last_modify,
      args.id_post
    ];
    return postgres
      .one(query, values)
      .then((res) => res)
      .catch((err) => err);
  }
}

exports.updatePost = updatePost;