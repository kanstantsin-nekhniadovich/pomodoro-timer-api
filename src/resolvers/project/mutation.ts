import { UserInputError } from 'apollo-server-express';
import { Project } from '@typings';
import { getUserIdFromAuthorizationHeader } from '../../utils/getUserIdFromAuthorizationHeader';

export const Mutation = {
  createProject: (_parent: unknown, args: Project.Mutation.CreateProject, { prisma, request }: Context): Promise<Project> => {
    const id = getUserIdFromAuthorizationHeader(request);
    const owner = {
      connect: {
        id,
      },
    };

    return prisma.createProject({ ...args.data, owner });
  },
  updateProject: async (_parent: unknown, args: Project.Mutation.UpdateProject, { prisma, request }: Context): Promise<Project> => {
    const { where: { id } } = args;
    const userId = getUserIdFromAuthorizationHeader(request);
    const projectExists = await prisma.$exists.project({ id, owner: { id: userId } });

    if (!projectExists) {
      throw new UserInputError('Project does not exist');
    }

    return prisma.updateProject(args);
  },
  deleteProject: async (_parent: unknown, args: UniqueIdPayload, { prisma, request }: Context): Promise<Project> => {
    const { id } = args;
    const userId = getUserIdFromAuthorizationHeader(request);
    const projectExists = await prisma.$exists.project({ id, owner: { id: userId } });

    if (!projectExists) {
      throw new UserInputError('Project does not exist');
    }
    return prisma.deleteProject(args);
  },
};
