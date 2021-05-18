import { TaskResolvers } from '@typings';
import { Task } from '@prisma/client';

import { Status } from '../../constants';
import { getUserIdFromAuthorizationHeader } from '../../utils/getUserIdFromAuthorizationHeader';
import { validateProjectExistence } from '../validateProjectExistence';

export const Mutation = {
  createTask: async (_parent: unknown, args: TaskResolvers.CreateTask, { prisma, request }: Context): Promise<Task> => {
    const { data: { project: { connect: { id } }, workTime } } = args;
    getUserIdFromAuthorizationHeader(request);
    await validateProjectExistence(prisma)(id);

    return prisma.task.create({ data: { ...args.data, currentCycle: 1, remainingTime: workTime, status: Status.TODO } });
  },
  updateTask: (_parent: unknown, args: TaskResolvers.UpdateTask, { prisma, request }: Context): Promise<Task> => {
    getUserIdFromAuthorizationHeader(request);
    return prisma.task.update(args);
  },
  deleteTask: (_parent: unknown, { id }: UniqueIdPayload, { prisma, request }: Context): Promise<Task> => {
    getUserIdFromAuthorizationHeader(request);
    return prisma.task.delete({ where: { id } });
  },
};
