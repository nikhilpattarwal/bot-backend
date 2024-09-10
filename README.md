GraphQL Yoga Server with Supabase Integration


## Description
This project is a GraphQL server built using GraphQL Yoga and Supabase for managing user data and coin balances. The server includes both query and mutation functionality to fetch and update user details, and integrates with a Supabase backend for data storage.

## Features
GraphQL API: Provides a flexible API to query and mutate user data.
Supabase Integration: Uses Supabase for managing user accounts and coin balances.
Cors Support: CORS is enabled to allow cross-origin resource sharing.
Express: Used as the web server framework for handling requests.
Tech Stack
Node.js: Backend runtime.
Express: Web server framework.
GraphQL Yoga: Simplifies building GraphQL APIs.
Supabase: Backend-as-a-service for database management.
GraphQL Tools: Used for schema creation and execution.
Dotenv: For managing environment variables.
Cors: Middleware for enabling CORS.
Installation
Clone the repository:
git clone https://github.com/your-repo-url
cd graphql-yoga-supabase-server

## Install dependencies:
npm install

## Create a .env file in the root directory and add the following environment variables:
SUPABASE_URL=your-supabase-url
SUPABASE_KEY=your-supabase-key
PORT=your-server-port (default: 4005)

## Start the server:
npm start

## API Endpoints
GraphQL Endpoint: /graphql

## Dependencies
@graphql-tools/schema: ^8.3.14
graphql: ^16.6.0
graphql-yoga: ^2.11.1
@supabase/supabase-js: ^1.35.5
dotenv: ^16.4.5
express: ^4.19.2
cors: ^2.8.5

Author: Nikhil Pattarwal
Email: nikhilpatterwal123@gmail.com
