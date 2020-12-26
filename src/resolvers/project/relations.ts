import { Project as ProjectType, User, Task } from '@typings';

export const Project = {
  owner: (parent: ProjectType, _args: unknown, { prisma }: Context): Promise<User> => {
    return prisma.project({ id: parent.id }).owner();
  },
  tasks: (parent: ProjectType, _args: unknown, { prisma }: Context): Promise<Task[]> => {
    return prisma.project({ id: parent.id }).tasks();
  },
};
