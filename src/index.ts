import { createSchema, createYoga } from 'graphql-yoga';
import { createServer } from 'http';
import { makeExecutableSchema } from '@graphql-tools/schema';
import resolvers from './resolvers';
import typeDefs from './schema';
import cors from 'cors'; 
import express from 'express';
import { YogaServer } from 'graphql-yoga';

const app = express();

app.use(cors());

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const yoga = createYoga({
  schema,
  graphqlEndpoint: '/graphql',
});


app.use(yoga);

const server = createServer(app);

server.listen(4000, () => {
  console.log('Server is running on http://localhost:4000');
});
