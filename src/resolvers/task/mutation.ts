import { Task } from 'prisma-client';
import { TaskMutation } from '@typings';

export const Mutation = {
  createTask: (_parent: unknown, args: TaskMutation.CreateTask, { prisma }: Context): Promise<Task> => {
    return prisma.createTask(args.data);
  },
  updateTask: (_parent: unknown, args: TaskMutation.UpdateTask, { prisma }: Context): Promise<Task> => {
    return prisma.updateTask(args);
  },
  deleteTask: (_parent: unknown, args: TaskMutation.DeleteTask, { prisma }: Context): Promise<Task> => {
    return prisma.deleteTask(args.where);
  },
};
