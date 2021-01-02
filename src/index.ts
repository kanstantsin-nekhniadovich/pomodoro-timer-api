import express from 'express';
import { buildContext } from 'graphql-passport';
import passport from 'passport';
import { ApolloServer } from 'apollo-server-express';
import cors from 'cors';
import { resolvers } from './resolvers';
import { prisma } from './prisma-client';
import { typeDefs } from './schema.graphql';
import { auth } from './auth';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req, res }) => ({ passportCtx: buildContext({ req, res }), prisma, request: req }),
  playground: true,
});

const app = express();

app.use(cors());
app.use(passport.initialize());

auth(prisma);

server.applyMiddleware({ app, path: process.env.GRAPHQL_PATH });

const port = process.env.PORT || 4000;

app.listen({ port }, () =>
  console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`),
);
