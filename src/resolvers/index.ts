import { Query as UserQuery } from './user/query';
import { Mutation as UserMutation } from './user/mutations';

export const resolvers = {
  Query: {
    ...UserQuery,
  },
  Mutation: {
    ...UserMutation,
  }
};
