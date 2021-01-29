import { UserInputError } from 'apollo-server-express';
import { Task } from '@typings';
import { getUserIdFromAuthorizationHeader } from '../../utils/getUserIdFromAuthorizationHeader';

export const Mutation = {
  createTask: async (_parent: unknown, args: Task.Mutation.CreateTask, { prisma, request }: Context): Promise<Task> => {
    const { data: { project: { connect: { id } } } } = args;
    const userId = getUserIdFromAuthorizationHeader(request);
    const projectExists = await prisma.$exists.project({ id, owner: { id: userId } });

    if (!projectExists) {
      throw new UserInputError('Project does not exist');
    }

    return prisma.createTask(args.data);
  },
  updateTask: (_parent: unknown, args: Task.Mutation.UpdateTask, { prisma, request }: Context): Promise<Task> => {
    getUserIdFromAuthorizationHeader(request);
    return prisma.updateTask(args);
  },
  deleteTask: (_parent: unknown, args: UniqueIdPayload, { prisma, request }: Context): Promise<Task> => {
    getUserIdFromAuthorizationHeader(request);
    return prisma.deleteTask(args);
  },
};
