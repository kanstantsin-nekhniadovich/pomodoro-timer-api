import { Project } from '@typings';
import { isDefined } from '../../utils/isDefined';
import { getUserIdFromAuthorizationHeader } from '../../utils/getUserIdFromAuthorizationHeader';

export const Query = {
  projects: async (_parent: unknown, args: Project.Query.Projects, { prisma, request }: Context): Promise<Project.Query.ProjectsResponse> => {
    const { query, skip, after, before, first, last, orderBy = 'createdAt_DESC' } = args;
    const id = getUserIdFromAuthorizationHeader(request);
    const where = { owner: { id } };

    const totalCount = await prisma.projectsConnection({ where }).aggregate().count();

    const optArgs = { last, skip, first, after, before, orderBy };

    if (isDefined(query)) {
      Object.assign(where, {
        OR: [{
          title_contains: query,
        }, {
          note_contains: query,
        }],
      });
    }

    return {
      projects: await prisma.projects({ ...optArgs, where }),
      totalCount,
    };
  },
  project: (_parent: unknown, args: UniqueIdPayload, { prisma }: Context): Promise<Nullable<Project>> => {
    return prisma.project({ id: args.id });
  },
};
