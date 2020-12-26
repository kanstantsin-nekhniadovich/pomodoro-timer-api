import { Project } from '@typings';
import { isDefined } from '../../utils/isDefined';

export const Query = {
  projects: (_parent: unknown, args: Project.Query.Projects, { prisma }: Context): Promise<Project[]> => {
    const { query, skip, after, before, first, last } = args;
    const optArgs = { last, skip, first, after, before };

    if (isDefined(query)) {
      Object.assign(optArgs, {
        where: {
          OR: [{
            title_contains: query,
          }, {
            note_contains: query,
          }],
        },
      });
    }

    return prisma.projects(optArgs);
  },
  project: (_parent: unknown, args: UniqueIdPayload, { prisma }: Context): Promise<Nullable<Project>> => {
    return prisma.project({ id: args.id });
  },
};
