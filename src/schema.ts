import { gql } from 'graphql-tag';

const typeDefs = gql`
  type User {
    id: String! 
    username: String!
    coin_balance: Int!
  }

  type Query {
    user(id: String!): User  
    getUserCoins(id: String!): Int
  }

  type Mutation {
    createUser(id: String!, username: String!, coin_balance: Int!): User  
    updateUserCoins(id: String!, coins: Int!): User 
  }
`;

export default typeDefs;
