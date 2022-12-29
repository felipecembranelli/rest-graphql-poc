// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

 
  type Make {
    id: String
    name: String
    image: String
  }

  type Model {
    id: String
    year: String
    name: String
    image: String
  }

  type Competitor {
    year: String
    name: String
    image: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    makes: [Make]
    modelsByMake : [Model]
    competitorsByModel: [Competitor]
  }
`;



module.exports = { typeDefs }