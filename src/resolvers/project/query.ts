import { Project } from '@typings';
import { isDefined } from '../../utils/isDefined';
import { getUserIdFromAuthorizationHeader } from '../../utils/getUserIdFromAuthorizationHeader';

export const Query = {
  projects: (_parent: unknown, args: Project.Query.Projects, { prisma, request }: Context): Promise<Project[]> => {
    const { query, skip, after, before, first, last } = args;
    const id = getUserIdFromAuthorizationHeader(request);

    const where = { owner: { id } };
    const optArgs = { last, skip, first, after, before };

    if (isDefined(query)) {
      Object.assign(where, {
        OR: [{
          title_contains: query,
        }, {
          note_contains: query,
        }],
      });
    }

    return prisma.projects({ ...optArgs, where });
  },
  project: (_parent: unknown, args: UniqueIdPayload, { prisma }: Context): Promise<Nullable<Project>> => {
    return prisma.project({ id: args.id });
  },
};
