import { Query as UserQuery } from './user/query';
import { Mutation as UserMutation } from './user/mutation';
import { User } from './user/relations';

import { Query as ProjectQuery } from './project/query';
import { Mutation as ProjectMutation } from './project/mutation';
import { Project } from './project/relations';

import { Query as TaskQuery } from './task/query';
import { Mutation as TaskMutation } from './task/mutation';
import { Task } from './task/relations';

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
  User,
  Project,
  Task,
};
