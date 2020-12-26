import { Task } from '@typings';

export const Mutation = {
  createTask: (_parent: unknown, args: Task.Mutation.CreateTask, { prisma }: Context): Promise<Task> => {
    return prisma.createTask(args.data);
  },
  updateTask: (_parent: unknown, args: Task.Mutation.UpdateTask, { prisma }: Context): Promise<Task> => {
    return prisma.updateTask(args);
  },
  deleteTask: (_parent: unknown, args: UniqueIdPayload, { prisma }: Context): Promise<Task> => {
    return prisma.deleteTask(args);
  },
};
