const graphql = require("graphql");
const {
  postgres
} = require("../../postgres");
const {
  AccountType
} = require("../type/");
const {
  account
} = require("../model/account.js");

const insertAccountU = {

  type: AccountType,
  args: account,
  resolve(parent, args) {
    const query = `INSERT INTO accounts(
          id_user,
          last_name,
          first_name,
          last_name_kana,
          first_name_kana,
          gender,
          birthday,
          email,
          email_confirm
          ) VALUES ($1, $2, $3, $4,$5,$6,$7,$8,$9) RETURNING
          id_user,
          last_name,
          first_name,
          last_name_kana,
          first_name_kana,
          gender,
          birthday,
          email,
          email_confirm
          `;
    const values = [
      args.id_user,
      args.last_name,
      args.first_name,
      args.last_name_kana,
      args.first_name_kana,
      args.gender,
      args.birthday,
      args.email,
      args.email_confirm
    ];
    return postgres
      .one(query, values)
      .then((res) => res)
      .catch((err) => err);
  }
}
exports.insertAccountU = insertAccountU;