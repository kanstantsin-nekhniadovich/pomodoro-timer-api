import { Project, User as UserType } from 'prisma-client';

export const User = {
  projects: (parent: UserType, _args: unknown, { prisma }: Context): Promise<Project[]> => {
    return prisma.user({ id: parent.id }).projects();
  },
};
