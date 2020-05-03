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

const insertPost = {
  type: PostType,
  args: post,
  resolve(parent, args) {
    const query = `INSERT INTO posts(id_story,
          id_post,
          has_chapter,
          title_chapter,
          title,
          story,
          date_last_modify) VALUES ($1, $2, $3, $4,$5,$6,$7) RETURNING id_story,
          id_post,
          has_chapter,
          title_chapter,
          title,
          story,
          date_last_modify`;
    const values = [
      args.id_story,
      args.id_post,
      args.has_chapter,
      args.title_chapter,
      args.title,
      args.story,
      args.date_last_modify,
    ];
    return postgres
      .one(query, values)
      .then((res) => res)
      .catch((err) => err);
  }
}
exports.insertPost = insertPost;