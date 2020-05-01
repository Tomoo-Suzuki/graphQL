const express = require("express");
const graphqlHTTP = require("express-graphql");
const cors = require("cors");
const {
  schema
} = require('./schemas/')

const app = express();

app.use(cors());
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

app.listen(7777, () => {
  console.log(`GraphQL Server listening...Access url is below`);
  console.log(`http://localhost:7777/graphql`);

});