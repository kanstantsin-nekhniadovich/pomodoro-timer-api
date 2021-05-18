import { ProjectResolvers } from '@typings';
import { Project } from '@prisma/client';

import { isDefined } from '../../utils/isDefined';
import { getUserIdFromAuthorizationHeader } from '../../utils/getUserIdFromAuthorizationHeader';

export const Query = {
  projects: async (_parent: unknown, args: ProjectResolvers.Projects, { prisma, request }: Context): Promise<ProjectResolvers.ProjectsResponse> => {
    const { query, skip, take, orderBy = { createdAt: 'desc' } } = args;
    const id = getUserIdFromAuthorizationHeader(request);
    const where = { owner: { id } };

    const totalCount = await prisma.project.count({ where });

    const optArgs = { skip, take, orderBy };

    if (isDefined(query)) {
      Object.assign(where, {
        OR: [{
          title: {
            contains: query,
          },
          note: {
            contains: query,
          },
        }],
      });
    }

    return {
      projects: await prisma.project.findMany({ where, ...optArgs, include: { tasks: true } }),
      totalCount,
    };
  },
  project: (_parent: unknown, args: UniqueIdPayload, { prisma }: Context): Promise<Nullable<Project>> => {
    return prisma.project.findUnique({ where: { id: args.id }, include: { tasks: true } });
  },
};
