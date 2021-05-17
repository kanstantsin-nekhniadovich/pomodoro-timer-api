import express, { Request } from 'express';
import { ApolloServer } from 'apollo-server-express';
import { resolvers } from './resolvers';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import { typeDefs } from './schema.graphql';
import { initializeFirebase } from './firebase';
import { isDevelopment } from './utils/environment';

initializeFirebase();

const prisma = new PrismaClient();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }: { req: Request }) => ({
    prisma,
    request: req,
  }),
  playground: isDevelopment(),
});

const app = express();
app.use(cors());

server.applyMiddleware({ app, path: process.env.GRAPHQL_PATH });

const port = process.env.PORT || 4000;

app.listen({ port }, () =>
  console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`),
);
