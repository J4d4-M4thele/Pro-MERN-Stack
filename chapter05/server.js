const express = require('express');
const { ApolloServer, ApolloError } = require('apollo-server-express');
const { types } = require('@babel/core');
//string our request should return
let aboutMessage = 'Issue Tracker API v1.0';

//schema
const typeDefs = 
//Query allows for the reading of data
//Mutation allows for the adding and deleting of data
`type Query {
    about: String!
}
type Mutation{
    setAboutMessage(message: String!): String
}`;

const resolvers = {
    Query: {
        about:() => aboutMessage,
    },
    Mutation: {
        //can change message in this field
        setAboutMessage
    },
};
//fieldName(obj, args, context)
function setAboutMessage(_, {message}) {
    return aboutMessage = message;
};

//initialising graphql server
const server = new ApolloServer({
    typeDefs,
    resolvers,
});

const app = express();
app.use(express.static('public'));

server.applyMiddleware({ app, path: '/graphql' });

app.listen(3000, () => {
    console.log('App started on port 3000')
});


// testing graphql api:

//query {
//     about
// }

// mutation {
//     setAboutMessage(message: 'Hello World!')
// }