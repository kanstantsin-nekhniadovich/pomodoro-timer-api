import { Query as UserQuery } from './user/query';
import { Mutation as UserMutation } from './user/mutation';

import { Query as ProjectQuery } from './project/query';
import { Mutation as ProjectMutation } from './project/mutation';

import { Query as TaskQuery } from './task/query';
import { Mutation as TaskMutation } from './task/mutation';

export const resolvers = {
  Query: {
    ...UserQuery,
    ...ProjectQuery,
    ...TaskQuery,
  },
  Mutation: {
    ...UserMutation,
    ...ProjectMutation,
    ...TaskMutation,
  },
};
