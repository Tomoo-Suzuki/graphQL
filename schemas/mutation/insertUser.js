const graphql = require("graphql");
const {
  postgres
} = require("../../postgres");
const {
  UserType
} = require("../type/");
const {
  user
} = require("../model/user.js");

const insertUser = {
  type: UserType,
  args: user,
  resolve(parent, args) {
    const query = `INSERT INTO users(id, password, user_type, magazine, agree_to_terms, date_reception) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id, password, user_type, magazine, agree_to_terms, date_reception`;
    const values = [
      args.id,
      args.password,
      args.user_type,
      args.magazine,
      args.agree_to_terms,
      args.date_reception,
    ];
    return postgres
      .one(query, values)
      .then((res) => res)
      .catch((err) => err);
  }
}

exports.insertUser = insertUser;