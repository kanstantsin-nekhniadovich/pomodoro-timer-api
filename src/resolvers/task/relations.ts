import { Task as TaskType, Project } from 'prisma-client';

export const Task = {
  project: (parent: TaskType, _args: unknown, { prisma }: Context): Promise<Project> => {
    return prisma.task({ id: parent.id }).project();
  },
};
