import { Project } from '@typings';

export const Mutation = {
  createProject: (_parent: unknown, args: Project.Mutation.CreateProject, { prisma }: Context): Promise<Project> => {
    const owner = {
      connect: {
        id: '', // TODO implement jwt token logic
      },
    };

    return prisma.createProject({ ...args.data, owner });
  },
  updateProject: (_parent: unknown, args: Project.Mutation.UpdateProject, { prisma }: Context): Promise<Project> => {
    return prisma.updateProject(args);
  },
  deleteProject: (_parent: unknown, args: UniqueIdPayload, { prisma }: Context): Promise<Project> => {
    return prisma.deleteProject(args);
  },
};
