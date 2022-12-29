const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./schema/type-defs");
const { resolvers } = require("./schema/resolvers");


require('dotenv').config();
const { mongoConnect } = require('./services/mongo');

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  
server.listen().then(({ url }) => {
    mongoConnect();
    console.log(`🚀  Server ready at: ${url}`);
});
  
 