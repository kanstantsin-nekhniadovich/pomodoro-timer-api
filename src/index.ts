import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs } from './prisma-client/prisma-schema';
import { resolvers } from './resolvers';
import cors from 'cors';
import { prisma } from './prisma-client';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: request => ({
    prisma,
    request,
  }),
  playground: true,
});

const app = express();
app.use(cors());

server.applyMiddleware({ app, path: '/api' });

const port = process.env.PORT || 4000;

app.listen({ port }, () =>
  console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`),
);
