const express = require("express");
const graphqlHTTP = require("express-graphql");
const bodyParser = require("body-parser");
const cors = require("cors");
const {
  postgres
} = require("./postgres");
const {
  schema
} = require('./schemas/schema')

const app = express();

app.use(cors());

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}))

app.listen(7777, () => {
  console.log(`GraphQL Server listening...Access url is below`);
  console.log(`http://localhost:7777/graphql`);

});

//https://dev.to/aurelkurtula/exploring-graphql-api-serve-3abf