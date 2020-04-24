const express = require("express");
const graphqlHTTP = require("express-graphql");
const bodyParser = require("body-parser");
const cors = require("cors");
const {
  postgres
} = require("./postgres");
// const schema = require('./schema/schema')

const app = express();

app.use(cors());

postgres.one("select * from users").then((res) => {
  try {
    console.log(res);
  } catch (e) {
    console.log(e);
  }
});

//endpoint
// app.use('/graphql', bodyParser.json(), graphqlHTTP({
//   schema,
//   graphiql: true
// }))

app.listen(7777, () => {
  console.log(`GraphQL Server listening on port 7777`);
});