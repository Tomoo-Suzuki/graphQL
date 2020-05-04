const graphql = require("graphql");
const {
  postgres
} = require("../../postgres");
const {
  RegistryType
} = require("../type/");
const {
  registry
} = require("../model/registry.js");

const insertRegistry = {
  type: RegistryType,
  args: registry,
  resolve(parent, args) {
    const query = `INSERT INTO users(id_user, password, date_reception) VALUES ($1, $2, $3) RETURNING id_user, date_reception; INSERT INTO accounts(id_user, email, email_confirm) VALUES ($1, $4, $5) RETURNING email, email_confirm`;
    const values = [
      args.id_user,
      args.password,
      args.date_reception,
      args.email,
      args.email_confirm,
    ];
    return postgres
      .one(query, values)
      .then((res) => res)
      .catch((err) => err);
  }
}

exports.insertRegistry = insertRegistry;