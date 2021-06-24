import { Project } from '@prisma/client';
import { ProjectResolvers } from '@typings';

import { getUserIdFromAuthorizationHeader } from '../../utils/getUserIdFromAuthorizationHeader';
import { validateProjectExistence } from '../validateProjectExistence';

export const Mutation = {
  createProject: (_parent: unknown, args: ProjectResolvers.CreateProject, { prisma, request }: Context): Promise<Project> => {
    const id = getUserIdFromAuthorizationHeader(request);
    return prisma.project.create({ data: { ...args.data, owner: { connect: { id } } } });
  },
  updateProject: async (_parent: unknown, args: ProjectResolvers.UpdateProject, { prisma, request }: Context): Promise<Project> => {
    const { where: { id } } = args;
    getUserIdFromAuthorizationHeader(request);
    await validateProjectExistence(prisma)(id);

    return prisma.project.update(args);
  },
  deleteProject: async (_parent: unknown, args: UniqueIdPayload, { prisma, request }: Context): Promise<ProjectResolvers.DeleteProject> => {
    const { id } = args;
    const userId = getUserIdFromAuthorizationHeader(request);
    await validateProjectExistence(prisma)(id);

    /* tslint:disable-next-line:await-promise */
    const project = await prisma.project.delete({ where: args });
    const totalCount = await prisma.project.count({ where: { owner: { id: userId } } });

    return {
      project,
      totalCount,
    };
  },
};
