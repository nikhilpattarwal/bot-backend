import { createSchema, createYoga } from 'graphql-yoga';
import { createServer } from 'http';
import { makeExecutableSchema } from '@graphql-tools/schema';
import resolvers from './resolvers';
import typeDefs from './schema';
import cors from 'cors'; 
import express from 'express';
import { YogaServer } from 'graphql-yoga';
import dotenv from 'dotenv';
dotenv.config();


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
console.log(process.env.PORT);
console.log(process.env.SUPABASE_URL);
console.log(process.env.SUPABASE_KEY)

app.use(yoga);

const server = createServer(app);
const PORT = process.env.PORT || 4005;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
