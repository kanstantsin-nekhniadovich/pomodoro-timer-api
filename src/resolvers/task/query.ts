import { Task } from 'prisma-client';
import { TaskQuery } from '@typings';

export const Query = {
  tasks: (_parent: Task, args: TaskQuery.Tasks, { prisma }: Context): Promise<Task[]> => {
    return prisma.tasks(args);
  },
  task: (_parent: Task, args: TaskQuery.Task, { prisma }: Context): Promise<Nullable<Task>> => {
    return prisma.task(args.where);
  },
};
