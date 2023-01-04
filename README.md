# POC GRAPHQL X REST

The purpose of this proof of concept is to understand the differences in implementing an API using REST and the same API using GraphQL.

## Requirements

1 - Intall mongodb locally (use docker as recommendation)

2 - Load json files into database using mongodb import

3 - Create .env file in 2 places and set up mongodb connection string in 2 places:

- RESTAPi root folder
- GraphQLApi root folder

Connection string:

```
MONGO_URL = mongodb://mongoadmin:secret@localhost:27888/?authSource=admin
```

## How to run backend services

- REST APi

Run it on the RESTAPI root folder:

```
node ./src/server.js
```

- GraphQL APi
Run it on the GraphQLAPI root folder:

```
npm start
```

### Run tests for every code change

```
npm test --watch
```

## How to run REST API frontend UI

Go to RESTApiUI/car-specs-ui/src/hooks/ folder and configure the correct REST API endpoint:

```
const API_URL = 'http://localhost:8000/v1/carSpecs';
```

Run it on the RESTAPI-UI root folder:

```
npm start
```


## How to run GraphQL API frontend UI

Change index.js

```
const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache()
});
```

and go to GraphApiUI/car-specs-ui/src/components/carmodels.js and configure the correct GRAPHQL API endpoint:

```
 fetch('http://localhost:4000/', {
````

Run it on the RESTAPI-UI root folder:

````
npm start
````

# References

## GraphQL tutorials
https://www.youtube.com/watch?v=OP8ZvRiUbc4
https://github.com/machadop1407/graphql-full-course/blob/main/server/schema/type-defs.js
https://www.apollographql.com/docs/apollo-server/getting-started/
https://www.freecodecamp.org/news/5-ways-to-fetch-data-react-graphql/
https://www.geeksforgeeks.org/consuming-a-graphql-api-using-fetch-react-client/
https://www.apollographql.com/docs/react/get-started/
https://stepzen.com/docs/using-graphql/making-queries-with-fetch
https://www.netlify.com/blog/2020/12/21/send-graphql-queries-with-the-fetch-api-without-using-apollo-urql-or-other-graphql-clients/


# GraphQL pros and cons
https://www.javatpoint.com/graphql-tages-and-disadvantages
https://medium.com/expedia-group-tech/pros-and-cons-of-graphql-2ec9104c74f2
