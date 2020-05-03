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

const insertAccount = {

  type: AccountType,
  args: account,
  resolve(parent, args) {
    const query = `INSERT INTO accounts(
          id,
          last_name,
          first_name,
          last_name_kana,
          first_name_kana,
          birthday,
          zip,
          prefecture,
          city,
          address3,
          building,
          purpose
          ) VALUES ($1, $2, $3, $4,$5,$6,$7,$8,$9,$10,$11,$12) RETURNING
          id,
          last_name,
          first_name,
          last_name_kana,
          first_name_kana,
          birthday,
          zip,
          prefecture,
          city,
          address3,
          building,
          purpose`;
    const values = [
      args.id,
      args.last_name,
      args.first_name,
      args.last_name_kana,
      args.first_name_kana,
      args.birthday,
      args.zip,
      args.prefecture,
      args.city,
      args.address3,
      args.building,
      args.purpose,
    ];
    return postgres
      .one(query, values)
      .then((res) => res)
      .catch((err) => err);
  }
}
exports.insertAccount = insertAccount;